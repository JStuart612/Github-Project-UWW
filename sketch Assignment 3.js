function setup() {
createCanvas(500, 500);
frameRate(30);
background(200);
colorMode(RGB, 300, 300, 300, 1);
}

function draw() {
background(200);
noStroke();
frameRate(30);
fill(300, 0, 0, 1);
ellipse(pmouseX, pmouseY, 15, 15);
stroke(5);
strokeWeight(5);
fill(0, 0, 300, .5);
ellipse(250, 250, 400, 400);
fill(5);
let x1 = 250;
let y1 = 250;
let x2 = mouseX;
let y2 = mouseY;
line(x1, y1, x2, y2);
noStroke();
ellipse(250, 250, 10, 10);
ellipse(mouseX, mouseY, 10, 10);
let d = (x1, y1, x2, y2);
 push();
  translate((x1 + x2) / 2, (y1 + y2) / 2);
  rotate(atan2(y2 - y1, x2 - x1));
  text(nfc(d, 1), 0, -5);
  pop();
  let eSize = 7;
  let x3= mouseX;
  let y3= 80;
  let x4= sqrt(x1);
  let y4= 20;
  stroke(5);
  line(x3, y3, 250, 250);
  ellipse(x3, y3, eSize, eSize);
   noStroke();
  fill(0);
  let spacing = 15;
  text('x = ' + x1, 0, y1 + spacing);
  text('sqrt(x) = ' + x2, 0, y2 + spacing);
}