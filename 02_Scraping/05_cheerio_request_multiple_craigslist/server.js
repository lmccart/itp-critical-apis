// https://github.com/cheeriojs/cheerio
// npm install cheerio

// https://github.com/request/request
// npm install request

// example page: http://itp.nyu.edu/sigs/program/?sortby=tier&semesteryear=Spring%202015

var cheerio = require('cheerio');
var request = require('request');

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

      var cats = $('p.attrgroup:contains("cats are OK - purrr")').length;
      var dogs = $('p.attrgroup:contains("dogs are OK - wooof")').length;
      var addr = $('div.mapaddress').text();
      var lat = $('#map').attr('data-latitude');
      var lon = $('#map').attr('data-longitude');
      price = parseInt(price.substring(1), 10);

      console.log(lat, lon);

    });
  }
});