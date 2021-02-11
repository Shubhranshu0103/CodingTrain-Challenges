let maze;

function setup() {
  let cnv = createCanvas(720, 720);
  cnv.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2)

  maze = new Grid(width, height, 20);
}

function draw() {
  background(0);
  maze.show();
}