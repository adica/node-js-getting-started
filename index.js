var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var weatherClient = require('./weather/client-api.js');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('pages/index');
});

app.post('/weather', function(request, response) {
    if (request.body.text) {
        weatherClient.forCity(request.body.text, function(err, data) {
        	//response.send(data);
            response.send('Current weather in ' + data.name + ': '+ data.weather[0].description + ', ' + data.main.temp_max + '° max');
        })
    } else {
        response.send("Please provide city");
    }
})

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
