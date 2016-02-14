/*const fs = require('fs');
const path = require('path');
const api = require('./client-api.js');
const cities = {};
const coords = {};
const file = fs.readFileSync(path.join(__dirname, 'data/city.list.json'), 'utf8');

const arr = file.split('\n');

arr.forEach(function(line) {
    line = line.trim().replace(/\n/g, '');
    var c = JSON.parse(line);
    cities[c.name] = c;
    coords[c.coord.lon.toString() + "_" + c.coord.lat.toString()] = c;
});

var exports = module.exports = {};

exports.getWeather = function(city) {
    if (city) {
        api.forCity(city, (err, result) => {
            if (err) {
                return console.error(err);
            }
            return (JSON.stringify(result));
        });
    } else {
        return console.log('City not provided');
    }
};
*/