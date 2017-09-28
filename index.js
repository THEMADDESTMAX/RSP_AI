'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const GameController = require('./controller/GameController');

const app = express();

// create application/json parser
const jsonParser = bodyParser.json();

// POST /login gets urlencoded bodies
app.post('/game', jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    let game = new GameController(req.body.id);
    game.generateValue();
    game.getWinner();
    res.send('result: ' + JSON.stringify(game))
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});