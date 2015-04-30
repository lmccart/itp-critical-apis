// You will need to install the express module
// http://expressjs.com
// npm install express

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));


var num = 0;
setInterval(updateNum, 3000);


function updateNum() {
  num = Math.random() * 10;
  console.log('num = '+num);
}


app.get('/get_num', function(request, response) {
  response.send(String(num));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});