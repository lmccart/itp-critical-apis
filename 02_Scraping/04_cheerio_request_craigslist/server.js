// https://github.com/cheeriojs/cheerio
// npm install cheerio

// https://github.com/request/request
// npm install request

// example page: http://newyork.craigslist.org/search/aap

var cheerio = require('cheerio');
var request = require('request');

var url = 'http://newyork.craigslist.org/search/aap';
request(url, function(err, resp, body) {
  if (err) console.log(err);

  $ = cheerio.load(body);
  $('.row').each(function() {
    //console.log($(this).text());
    var title = $(this).find('.hdrlnk').text();
    var price = $(this).find('.price').text();
    var rooms = $(this).find('.housing').text();
    var pnr = $(this).find('.pnr').text();
    console.log(title, price, rooms, pnr);
  });
});