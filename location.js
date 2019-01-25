var request = require('request');
var url = 'http://ipinfo.io';

module.exports = function () {
    return new Promise(function (resolve, reject) {
        request({
            url: url,
            json: true
        }, function (error, responce, body) {
            if (error) {
                reject();
            } else {
                //var obj = JSON.stringify(body, null, 1);
               //var object = JSON.parse(obj);
               resolve(body);
               //console.log(obj);
            }
        });
    });
} 