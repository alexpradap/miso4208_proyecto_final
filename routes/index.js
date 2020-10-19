const child_process = require('child_process');
var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');
var mqtt = require('mqtt')

var client = mqtt.connect('mqtt://localhost');
client.on('connect', function () {
    console.log('Connected via MQTT')
    client.subscribe(['starter','terminator']);
})

router.get('/notifications',(req,res,next)=>{
    console.log("Iniciando Notifications")
    client.on('message', function (topic, message) {
        // message is Buffer
       console.log("Tratando de obtener mensajes")
       //client.end()
       res.render('notifications',{ data: 1})
    }) 
})
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

    client.publish('starter', `{"id_user":"3","id_type":"2","script":"${currentTest}"}`);
    
    //client.on('message', function (topic, message) {
         // message is Buffer
      //  console.log(message.toString())
        //client.end()
    //})
    
    res.render('test',{test:'Cargando Test on Worker'});
    //res.send('Test started'); //Convertir respuesta a un esquema JSON e implementar PUSH cuando la prueba termine
});

module.exports = router;