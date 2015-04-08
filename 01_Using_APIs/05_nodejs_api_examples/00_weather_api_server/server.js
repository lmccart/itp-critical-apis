
var http = require('http');

http.createServer(function (request, response) {
  response.setHeader('Content-Type', 'application/json');
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=NewYork,USA';

  http.get(url, function(res) {
    var body = '';

    res.on('data', function(chunk) {
      body += chunk;
    });

    res.on('end', function() {
      var data = JSON.parse(body)
      console.log("Got response: ", data);
      response.end(JSON.stringify(data));
    });

  }).on('error', function(e) {
    console.log("Got error: ", e);
  });

  
}).listen(3000);
console.log('Server running at 3000');