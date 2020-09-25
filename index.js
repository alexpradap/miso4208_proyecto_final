const child_process = require('child_process');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    //res.send('Server is up.');
    res.sendFile('index.html', {root: __dirname});
});

app.get('/styles.css', (req, res) => {
    res.sendFile('styles.css', {root: __dirname});
});

app.get('/start', (req, res) => {
    child_process.exec('ECHO "Execution in progress..." > result.log').toString('utf8');
    child_process.exec('npx cypress run --quiet --headless --spec "cypress/integration/monkey_testing_ripper.spec.js" > result.log').toString('utf8');
    res.send('Test started'); //Convertir respuesta a un esquema JSON e implementar PUSH cuando la prueba termine
});

app.get('/result', (req, res) => {
    res.sendFile('result.log', {root: __dirname});
});

app.get('/evidence', (req,res) => {
    res.sendFile('cypress/videos/monkey_testing_ripper.spec.js.mp4', {root: __dirname});
    //Implementar manejo de nombre de archivo en donde queda el resultado para enviar el archivo correcto
});
    
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});