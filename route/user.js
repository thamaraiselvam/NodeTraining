const express = require('express');
const server = express.Router();
const userController = require('./../controller/user');

server.get('/', (req, res) => {
    res.json(userController.get());
})

server.post('/', (req, res) =>{
    userController.add(req.body);
    res.json(userController.get());
})

server.put('/', (req, res) =>{
    res.send('this is put request for User');
})

server.delete('/', (req, res) =>{
    userController.delete(req.body.name);
    res.json(userController.get());
})

module.exports = server;