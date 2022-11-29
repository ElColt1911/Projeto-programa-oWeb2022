const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'funcionarioweb'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Banco conectado!!!');
});

module.exports = connection;