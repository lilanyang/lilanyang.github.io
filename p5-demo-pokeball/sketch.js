let s = 100; // size of pokeball
let x = 50; // x-coordinate starts at 50
let y = 50; // y-coordinate starts at 50
let vx = 3; // velocity in x-direction
let vy = 2; // velocity in y-direction

let pokeball;  // create an image

function preload(){
  pokeball = loadImage('pokeball.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  imageMode(CENTER);
  pokeball.resize(s,s);
  image(pokeball,x,y);

  // ellipse(x, y, d);
  x = x + vx; // updating the x-coordinate
  y = y + vy; // updating the y-coordinate

  console.log(pokeball.width/pokeball.height);
  
  if (x + pokeball.width / 2 >= windowWidth || x - pokeball.width / 2 <= 0) {
    vx = -vx;
  }
  if (y + pokeball.height / 2 >= windowHeight || y - pokeball.height / 2 <= 0) {
    vy = -vy;
  }

}
