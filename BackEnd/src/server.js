const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');
const app = express()

app.use(bodyParse.urlencoded({extended: true}));

const login = require('./api/login');

app.use('/login', login);

app.listen(3000, () => {
    console.log("Executando na porta 3000")
});