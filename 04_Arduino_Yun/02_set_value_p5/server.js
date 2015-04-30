// You will need to install the express module
// http://expressjs.com
// npm install express

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

var pressure = 0;

app.get('/set_pressure', function(request, response) {
  pressure = request.query.val;
  response.send('pressure set to '+pressure);
});

app.get('/get_pressure', function(request, response) {
  response.send(String(pressure));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});