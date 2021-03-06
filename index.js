const express = require('express');
var exphbs = require("express-handlebars");
const app = express();
const port = 3000;

var mysql = require('mysql');
var connection  = require('./lib/db');

// Routes
var indexRouter = require('./routes/index');

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static('node_modules/admin-lte'));

app.use('/', indexRouter);


/*app.get('/index', (req, res) => {
    res.render('home');
});

app.get('/template', (req, res) => {
    res.render('starter');
});

app.get('/styles.css', (req, res) => {
    res.sendFile('styles.css', {root: __dirname});
});

app.get('/start', (req, res) => {
    let testId = req.query.test;
    let currentTest = arrayTest[testId];


    child_process.exec(`ECHO "Execution of ${currentTest} in progress..." > result.log`).toString('utf8');

        child_process.exec(`rm cypress/videos/${currentTest}.spec.js.mp4`).toString('utf8');
        child_process.exec(`npx cypress run --quiet --headless --spec "cypress/integration/${currentTest}.spec.js" >> result_${currentTest}.log`).toString('utf8');    
    
    //child_process.exec('npx cypress run --quiet --headless --spec "cypress/integration/monkey_testing_ripper.spec.js" >> result.log').toString('utf8');
    
    res.send('Test started'); //Convertir respuesta a un esquema JSON e implementar PUSH cuando la prueba termine
});

app.get('/result', (req, res) => {

    let testId = req.query.test;
    let currentTest = arrayTest[testId];
    res.sendFile(`result_${currentTest}.log`, {root: __dirname});
});

app.get('/evidence', (req,res) => {

    let testId = req.query.test;
    
        let currentTest = arrayTest[testId];
        child_process.exec(`ls cypress/videos/${currentTest}.spec.js.mp4`, (error, stdout, stderr) => {
            if (error) {
                res.send('Evidence video can be seen here when test is done.');
                //ls: cypress/videos/monkey_testing_ripper.spec.js.mp4: No such file or directory
            }
            else {
                res.sendFile(`cypress/videos/${currentTest}.spec.js.mp4`, {root: __dirname});
                //Implementar manejo de nombre de archivo en donde queda el resultado para enviar el archivo correcto
            }
        }); 
    
    
});
*/


    
  module.exports = app;