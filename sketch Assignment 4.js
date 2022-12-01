function setup() {
createCanvas(500, 500);
colorMode(RGB, 100, 100, 100, 1);
}

let num = 25;
let R = 100;
let G = 100;
let B = 100;
let T = 1;
let posY = 0;
let y1 = -35;
let y2 = 500;
let x = -8;
function draw() {
background(50);
 fill(30);
  y = 0;
  for (let i = 0; i < num; i++) {
    rect(445, y, 30, 10);
    y += 20;
  }
  y = 10;
  for (let i = 0; i < num; i++) {
    rect(465, y, 30, 10);
    y += 20;
  }
    fill(30);
  y = 0;
  for (let i = 0; i < num; i++) {
    rect(5, y, 30, 10);
    y += 20;
  }
  y = 10;
  for (let i = 0; i < num; i++) {
    rect(25, y, 30, 10);
    y += 20;
  }
  fill(100);
  y = 0;
  for (let i = 0; i < num; i++) {
    rect(245, y, 5, 30);
    y += 20;
  }
  fill(100);
  y = 0;
  for (let i = 0; i < num; i++) {
    rect(255, y, 5, 30);
    y += 20;
  }
 fill(20);
 rect(230, 15, 40, 90);
 fill(10);
 rect(150, y1, 40, 55);
 rect(350, y2, 40, 55);
if (y1 > 500) {
    y1 = -35;
}
if (y2 < -35) {
    y2 = 500;
}
if (keyIsPressed === true) {
    fill(100, 0, 0, 1);
    ellipse (250, 40, 30, 30);
    } else {
    fill(0);
    ellipse (250, 40, 30, 30);
    }
if (keyIsPressed === true) {
   fill(0);
   ellipse (250, 80, 30, 30);
   } else {
    fill (0, 100, 0, 1);
  ellipse (250, 80, 30, 30);
   }
 if (keyIsPressed === true) {
     y1 = y1;
     y2 = y2;
 } else {
     y1 = y1 + 1;
     y2 = y2 - 1;
 }
fill(10);
rect(x, 280, 18, 14);
}
function mousePressed() {
  if (rect, x, 280, 18, 14) {
    x = x + 3;
  } else {
  }
}