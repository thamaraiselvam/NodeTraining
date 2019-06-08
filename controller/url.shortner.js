const request = require('request');
class urlShortnerController {
    shrink(actualUrl) {
        return new Promise((resolve, reject) => {
            request.post('https://cleanuri.com/api/v1/shorten',
            {form:{url: actualUrl}},
            function (error, response, body) {
                resolve(JSON.parse(body));
            });
        })
    }
}

module.exports = new urlShortnerController();