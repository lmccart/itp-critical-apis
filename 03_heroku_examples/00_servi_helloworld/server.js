// https://github.com/antiboredom/servi.js
// npm install servi

// every servi application must have these 2 lines
var servi = require("servi");
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
port(3001);


// set up the routes
route('/', hello);


// route handler methods
function hellow(request){
  request.respond('hello world');
}

start();