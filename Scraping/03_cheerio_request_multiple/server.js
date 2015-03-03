// https://github.com/cheeriojs/cheerio
// npm install cheerio

// https://github.com/request/request
// npm install request

// example page: http://itp.nyu.edu/sigs/program/?sortby=tier&semesteryear=Spring%202015

var cheerio = require('cheerio');
var request = require('request');

var url = 'http://itp.nyu.edu/sigs/program/?sortby=tier&semesteryear=Spring%20';

var years = ['2015', '2014', '2013', '2012'];

// we use forEach here rather than a normal for loop to keep track of which year we're on
years.forEach(function(item) {
  request(url+item, function(err, resp, body) {
    if (err) console.log(err);

    console.log('\n\n'+item+'\n\n');

    $ = cheerio.load(body);
    $('.course-title').each(function() {
        console.log($(this).text());
    });
  });
});