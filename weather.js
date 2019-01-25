var request = require('request');


module.exports = function (location) {
    return new Promise (function (resolve, reject) {
    var loc = encodeURIComponent(location);
    //console.log(location);
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ loc + '&appid=7ee799d11cc6ce09ed11077e76683f4d&units=metric';
    request({
        url: url,
        json: true
    }, function (error, responce, body) {
        if (typeof body.name === 'undefined') {
            reject('unable to fetch weather');
        } else {
            //var obj = JSON.stringify(body, null, 1);
           //var object = JSON.parse(obj);
           try{
            resolve('it is ' + body.main.temp + ' in ' + body.name);
           } catch (e) {
               console.log('Unable to find location');
           }
           
           //console.log(obj);
        }
    });
});
}
