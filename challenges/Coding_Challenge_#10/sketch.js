let maze;
let gridScale = 50;
function setup() {
  let cnv = createCanvas(1280, 720);
  cnv.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2)
  //frameRate(60);
  maze = new Maze(width, height, gridScale);
}

function draw() {
  background(0);
  if (!maze.transitionToNextState()) {
    console.log("No Loop!");
    noLoop();
  }
  maze.show();
}