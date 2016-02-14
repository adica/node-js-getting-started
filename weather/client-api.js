var settings = require('./settings.json');
var http = require('http');
var path = require('path');
var fs = require('fs');

//var appid = fs.readFileSync(path.join(__dirname,'api-key'), 'utf8').trim();
var appid = process.env.API_KEY;

var options = {
    port: 80,
    hostname: settings.apiAddress,
    method: 'GET'
};

var forCity = exports.forCity = function forCity(city, callback) {
    city = encodeURIComponent(city);
    options.path = '/data/2.5/weather?q=' + city + '&units=metric&appid=' + appid;
    console.log(options.path);
    var req = http.request(options, function(res) {
        var buffer = []
        res.on('data', function(d) {
            buffer.push(d);
        });
        res.on('end', function() {
            callback(null, JSON.parse(buffer.join('')));
        });
        res.on('error', function(err) {
            callback(err);
        });
    });
    req.end();
}

//for testing
/*forCity('Tel Aviv',function (err, data) {
  console.log(data)
})*/
