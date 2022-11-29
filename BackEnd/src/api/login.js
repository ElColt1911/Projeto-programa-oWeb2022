const express = require('express');
const router = express.Router();
const connection = require('../DB/db');


router.get('/getAll', (req, res) => {
    //res.setHeader('Access-Control-Allow-Origin');
    var query = 'SELECT * FROM Usuario';
    connection.query(query, (err, result, field) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})

router.post('/logar', (req, res) => {
    console.log(`Body: ${req.body}`);
    var query = 'SELECT * FROM Usuario WHERE Usuario = ? AND Senha = ?';

    connection.query(query, [req.body.Usuario, req.body.Senha],(error, response, field) => {
        if(response.length > 0) {
            res.send({status: 200, response});
        } else {
            res.send({status: 404});
        }
    })
});

router.post('/criar', (req, res) => {
    console.log(`Body: ${req.body.Usuario}`);
    const Usuario = req.body.Usuario;
    const Senha = req.body.Senha;
    var query = 'INSERT INTO usuario VALUES (?, ?)';
    connection.query(query, [Usuario, Senha], (err, result, field) => {
        if(err){
            console.log(err);
            res.send(500).json({status: 'error'});
        }else{
            res.send(200).json([req.body.Usuario + "foi cadastrado com sucesso!"]);
            console.log(req.body.Usuario + "foi cadastrado com sucesso!");
        }
        console.log(result);
    });
})

module.exports = router;
