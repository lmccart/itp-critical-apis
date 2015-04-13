function setup() {
  createCanvas(windowWidth, windowHeight);
  loadJSON('/all', drawScene);
  noStroke();
  textAlign(CENTER);
  background(0);
}

function drawScene(data) {
  console.log(data);

  for (var i=0; i<data.length; i++) {
    var y = map(data[i].price, 1000, 4000, 0, height);
    if (data[i].cats) {
      fill(255, 0, 0);
    } else {
      fill(255);
    }
    text(data[i].title, width/2, y);
  }
}
