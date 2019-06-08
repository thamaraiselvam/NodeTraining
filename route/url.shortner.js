const express = require('express');
const server = express.Router();

const urlShortnerController = require('./../controller/url.shortner');

server.post('/', async (req, res) => {
    let resultData = await urlShortnerController.shrink(req.body.actualUrl);
    res.send(resultData);
})

module.exports = server;