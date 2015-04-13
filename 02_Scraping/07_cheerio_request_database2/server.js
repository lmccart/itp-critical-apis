// https://github.com/antiboredom/servi.js
// npm install servi

// https://github.com/cheeriojs/cheerio
// npm install cheerio

// https://github.com/request/request
// npm install request

// example page: http://newyork.craigslist.org/search/aap

var cheerio = require('cheerio');
var request = require('request');


// every servi application must have these 2 lines
var servi = require("servi");
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
port(3001);


// set up a database
// looks for a file called "listings.db" or creates one if it doesn't exist
var db = useDatabase("listings"); 

// we use forEach here rather than a normal for loop to keep track of which year we're on
var url = 'http://newyork.craigslist.org/search/aap';
var links = [];

request(url, function(err, resp, body) {
  if (err) console.log(err);

  $ = cheerio.load(body);
  $('.row').each(function() {
    var l = 'http://newyork.craigslist.org'+$(this).find('.hdrlnk').attr('href');
    links.push(l);
  });

  for (var i=0; i<links.length; i++) {
    request(links[i], function(err, resp, body) {
      
      $ = cheerio.load(body);
      var title = $('title').text();
      var price = $('.postingtitle').find('.price').text();
      price = parseInt(price.substring(1), 10);

      var cats = $('p.attrgroup:contains("cats are OK - purrr")').length;
      var dogs = $('p.attrgroup:contains("dogs are OK - wooof")').length;
      var addr = $('div.mapaddress').text();
      var lat = $('#map').attr('data-latitude');
      var lon = $('#map').attr('data-longitude');

      var listing = {
        title: title,
        price: price,
        cats: cats,
        dogs: dogs,
        addr: addr,
        lat: lat,
        lon: lon
      }

      db.add(listing);
    });
  }
});



// set up the routes
route('/all', showAll);
route('/max/:num', showListings);


// show all the names
function showAll(request){
  db.getAll(function(data) {
    request.header("application/json");
    request.respond(JSON.stringify(data));
  });

}

function showListings(request) {
  var num = request.params.num;

  db.getAll(function(data) {
    var listings = [];
    for (var i=0; i<data.length; i++) {
      if (data[i].price <= num) {
        listings.push(data[i]);
      }
    }
    request.header("application/json");
    request.respond(JSON.stringify(listings));
  });
}

start();