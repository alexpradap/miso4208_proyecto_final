const child_process = require('child_process');
var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');
var mqtt = require('mqtt')

router.get('/index', (req, res, next) => {
    connection.query('SELECT * FROM test_types ',function(err,rows) {
        if(err){
         //req.flash('error', err); 
         //res.render('customers',{page_title:"Customers - Node.js",data:''});   
         console.log("Error")
        }else{
            console.log(rows);
            res.render('starter', {data:rows});
            //res.render('customers',{page_title:"Customers - Node.js",data:rows});
        }
    });
    
});

var client = mqtt.connect('mqtt://localhost');
client.on('connect', function () {
    console.log('Connected via MQTT')
    client.subscribe(['starter','terminator']);
})
router.get('/start', (req, res) => {

    var arrayTest = {
        1:"login-succesful",
        2:"creating_a_habit",
        3:"register-failed-account-exists",
        4:"create_public_challenge",
        5:"monkey_testing_ripper"
    };

    let testId = req.query.test;
    let currentTest = arrayTest[testId];


    child_process.exec(`ECHO "Execution of ${currentTest} in progress..." > result.log`).toString('utf8');
    child_process.exec(`rm cypress/videos/${currentTest}.spec.js.mp4`).toString('utf8');

    //child_process.exec(`npx cypress run --quiet --headless --spec "cypress/integration/${currentTest}.spec.js" >> result_${currentTest}.log`).toString('utf8');
    const ls=child_process.spawn('npx', ['cypress','run','--quiet', '--headless', '--spec',`cypress/integration/${currentTest}.spec.js`]);
    
    var conteo=0
    ls.stdout.on("data", data => {
        console.log(`stdout: ${data}`);
        if(conteo==0){
            console.log(`publising on starter ${conteo}`);
            client.publish('starter', `[{file:'${currentTest}'}]`);
            conteo++;
        } else {
            console.log(`not publishing.  It Must be updating`);
        }
        
    });

    client.on('message', function (topic, message) {
         // message is Buffer
        console.log(message.toString())
        //client.end()
    })

    
    

    ls.stdout.on("close", (data)=>{
        console.log("Finish")
        client.publish('terminator', `[{file:'${currentTest}'}]`);
    })
    
    res.send('Test started'); //Convertir respuesta a un esquema JSON e implementar PUSH cuando la prueba termine
});

module.exports = router;