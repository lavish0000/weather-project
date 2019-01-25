var weather = require('./weather.js');
var location= require('./location.js');

var argv = require('yargs')
.command('location', 'enterlocation', function (yargs) {
    yargs.options({
        location: {
            demand: true,
            alias: 'l',
            description: 'enter your location'
        }}).help('help');
})
.help('help')
.argv;
var command = argv._[0];
console.log(argv);
console.log(command);
console.log( typeof argv.location );
if(command == undefined || typeof argv.location == 'number' || typeof argv.location == 'boolean') {
    //var loc;
    
    location().then( function (location){
        var loc = location.city;
        return weather(loc);
    }).then( function (data) {
        console.log(data);
    }, function (error){
        console.log(error);
    }); 
    //console.log(loc + 'saa');
    // weather(loc, function (currentweather) {
    //     console.log(currentweather);
    // });

    
    //console.log(loc + 'asdf');
} else { 
    weather(argv.location).then( function (data) {
        console.log(data);
    }, function (error){
        console.log(error);
    }); 
}
