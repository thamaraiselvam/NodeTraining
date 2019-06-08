const server = require('express')();
const bodyParser = require('body-parser')

const config = require('./config/config.json');
const userRoute = require('./route/user');
const calculatorRoute = require('./route/calculator');
const urlShortnerRoute = require('./route/url.shortner');

server.use(bodyParser.json());
server.use('/user/', userRoute);
server.use('/calculate/', calculatorRoute);
server.use('/shrinkurl/', urlShortnerRoute);

server.listen(config.port, () => {
    console.log('app started on port', config.port);
})