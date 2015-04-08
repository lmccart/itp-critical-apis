// https://github.com/antiboredom/servi.js
// npm install servi

// https://github.com/cheeriojs/cheerio
// npm install cheerio

// https://github.com/request/request
// npm install request

// example page: http://itp.nyu.edu/sigs/program/?sortby=tier&semesteryear=Spring%202015

var cheerio = require('cheerio');
var request = require('request');


// every servi application must have these 2 lines
var servi = require("servi");
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
port(3001);


// set up a database
// looks for a file called "courses.db" or creates one if it doesn't exist
var courseDb = useDatabase("courses"); 


var url = 'http://itp.nyu.edu/sigs/program/?sortby=tier&semesteryear=Spring%202015';
request(url, function(err, resp, body) {
  if (err) console.log(err);

  $ = cheerio.load(body);
  $('.course-listing li').each(function() {

    var num = $(this).find('.course-num').text().match(/\d+/)[0];

    var c = {
      title: $(this).find('.course-title').text(),
      number: num,
      instructors: $(this).find('.course-instructors').text(),
      description: $(this).find('.course-desc').text()
    }
    courseDb.add(c);
  });
});



// set up the routes
route('/all', showAll);
route('/course/:num',showCourse);

serveFiles('public');

// show all the names
function showAll(request){
  courseDb.getAll(gotCourses);

  function gotCourses(courses){
    // var courseText = "";
    // for (i =0; i < courses.length; i++) {
    //     courseText += "<b>"+courses[i].title + "</b><br/>";
    //     courseText += courses[i].instructors + "<br/>";
    //     courseText += courses[i].description + "<br/>";
    // }
    // request.respond( courseText );
    request.header("application/json");
    request.respond(JSON.stringify(courses));
  }
  
}


function showCourse(request) {
  var num = request.params.num;
  courseDb.search("number", num, gotIt);

  function gotIt(data) {
    request.header("application/json");
    request.respond(JSON.stringify(data));
  }
}

start();