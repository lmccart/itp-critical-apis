// Install servi node module: npm install servi
var servi = require('servi');

// Install restclient node module: npm install node-restclient
var restclient = require('node-restclient');

var app = new servi(true);

port(8080);

route('/', requestHandler);

function requestHandler(request) {

  var url = 'http://api.openweathermap.org/data/2.5/weather?q=NewYork,USA';

  restclient.get(url, function(data) {
    data = JSON.parse(data);
    console.log(data.coord.lon)
  });

  request.respond("Hello World");

  
}

start();