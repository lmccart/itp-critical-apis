function setup() {
  createCanvas(windowWidth, windowHeight);
  loadJSON('/all', drawScene);
  noStroke();
}

function drawScene(data) {
  console.log(data);

  for (var i=0; i<data.length; i++) {
    var x = random(width);
    var y = random(height);
    fill(0);
    ellipse(x, y, 50, 50);
    fill(255, 10, 100);
    text(data[i].number, x, y);
    text(data[i].title, x, y+10);
    text(data[i].instructors, x, y+20);
  }
}
