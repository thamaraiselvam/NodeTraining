const express = require('express');
const server = express.Router();
const CalculatorController = require('./../controller/calculator')

server.post('/add', (req, res) => {
    res.send(`
    Value is: ${CalculatorController.add(req.body.first, req.body.second)}`);
})

module.exports = server;