let stars;


function setup() {
  let cnv = createCanvas(1280, 720);
  cnv.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);
  stars = new Array(400);
  for (let i = 0; i < stars.length; i++)
    stars[i] = new Star(width, height);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  let speed = map(mouseX, 0, width, 0, 20);
  Star.speed = speed;
  for (s of stars) {
    s.update();
    s.show();
  }
}