var p = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  textAlign(CENTER);
  background(0);
  setInterval(updateScene, 1000);
}

function draw() {
  background(0);
  ellipse(width/2, height/2, p, p);
}


function updateScene() {
  loadJSON('/get_pressure', updatePressure);
}

function updatePressure(data) {
  p = data;
}
