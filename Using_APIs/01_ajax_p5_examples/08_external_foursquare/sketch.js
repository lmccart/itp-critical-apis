// 1. Create an app to get credentials: https://foursquare.com/developers/apps
// 2. Endpoints: https://developer.foursquare.com/start

// http://whatsmylatlng.com/

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noStroke();
  fill(0);
  var url = "https://api.foursquare.com/v2/venues/search?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&v=20130815&ll=40.7,-74&query=sushi";
  loadJSON(url, drawData);
}

function draw() {
}

function drawData(data) {
  var places = data.response.venues;
  console.log(places);
  for (var i=0; i<places.length; i++) {
    var x = map(places[i].location.distance, 0, 5000, 0, width);
    var y = map(places[i].stats.checkinsCount, 0, 5000, 0, height);
    console.log(places[i].stats);
    text(places[i].name, x, y);
  }
}