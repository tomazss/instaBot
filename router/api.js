const express = require('express');
const bodyParser = require('body-parser');
const users = require('../models/users');
const router = express.Router();
const puppeteer = require('../index');

router.get("/all", (req, res) => {
    res.json(JSON.stringify(users.getAll()));

});
router.get("/puppeteer", async(req, res) => {
 logar()
})

// criando a rota api vai responder a all e a new

router.post("/new", bodyParser.json(), (req, res) => {
    let email = req.body.email;
    let senha = req.body.senha;
    let url = req.body.url;
    users.newUser(email, senha, url)

    res.send("post adicionado");

});


module.exports = router;