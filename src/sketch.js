let timer = 0;
let img;
let imgone;
let imgtwo;
let x = 200;
let x1 = -100;
// let x2 = -100;
let eveX = 650;
let earthS = 0;
let martyY = 0;
let beachY = 0;
let clicked = false;

let scene = 0;
let t = 0;

function preload() {
  img = loadImage('assets/walle-earth copy.png');
  imgone = loadImage('assets/martyplain.png');
  imgtwo = loadImage('assets/wallecleanearth.jpeg');
}
function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);
  if (scene == 0) {
    scene1();
  } else if (scene == 1) {
    scene2();
  } else {
    scene3();
  }

  // switch from scene 1 to 2
  if (x1 >=750) {
    scene = 1;
    x1 = -100;
    t = 0;
  } else if (t > 20 && scene == 1) { // scene 2 to 3
    scene = 2;
    t = 0;
  }



}

function scene1() {
  console.log("scene 1!!!");
  drawWalleworld(-100, 0, 0.3);

  drawTrashTwo(100, 260, 1.2);
  drawTrashTwo(300, 310, 1);

  if (clicked) {
    drawWalle1(x1);
    x1+=10;
  }
}
function scene2() {
  console.log("scene 2!!!");
  drawWalleworld(-140, 0, 0.3);


  drawWalle1(x1);
  if (x1 < width / 2 - 60) {
    x1++;
  }

  drawEve(eveX);
  if (eveX > width / 2 + 60) {
    eveX--;
  } else {
    t++;
  }

  drawTrashOne(220, 260, 1.2);


}
function scene3() {
  drawWalleworld(-140, 0, 0.3);
  for (y = 0; y < width; y++) {
    drawHeart(random(width), random(height), random(0.5, 1.5), color(random(100, 255), random(20, 40), random(70, 90)), color(random(200, 255), random(150, 180), random(180, 200)))
  }

  drawCleanearth(0, 0, earthS);
  if (earthS <= 0.35) {
    earthS = earthS + 0.01;
    drawWalle1(x1);
    drawEve(eveX);
  } else {
    drawWalleHolding(x1);
    drawBootplant(0, 250);
    drawEve(eveX);
    console.log("here: " + t);
    t++;
  }
  if (t > 30) {
    console.log("HERE");
    drawBeach();
    drawWalleHolding(x1);
    drawBootplant(0, 250);
    drawEve(eveX);
    if ((martyY >= 0 && martyY <= 201)) {
      drawMarty(101, martyY, 1);
      martyY = martyY + 8;
    }
    if ((martyY >= 200)) {
      drawMarty(101, 215, 1);
      drawCostume(-100, 0);
    }
  }



  drawEve(eveX);





}
function drawWalleworld(worldX, worldY, worldS) {
  push();
  translate(worldX, worldY);
  scale(worldS);
  image(img, 0, 0);
  pop();
}

function drawMarty(martyX, martyY, martyS) {
  push();
  translate(martyX, martyY);
  scale(martyS)
  image(imgone, -151, -156);
  pop();
}

function drawTrashOne(x, y, s) {
  push();
  scale(s);
  translate(x, y);
  stroke(70, 50, 30);
  strokeWeight(1);
  fill(155, 130, 130);
  quad(55, 46, 64, 57, 33, 70, 26, 45)
  fill(150, 120, 80);
  quad(44, 45, 65, 60, 40, 70, 24, 63)
  fill(190, 150, 120);
  quad(50, 50, 60, 70, 40, 70, 30, 55)
  fill(150, 150, 100);
  quad(40, 60, 55, 70, 40, 65, 30, 65)
  pop();
}

function drawTrashTwo(x, y, s) {
  push();
  scale(s);
  //rotate(PI/3);
  translate(x, y);
  stroke(30);
  strokeWeight(1);
  fill(90);
  quad(55, 46, 57, 57, 38, 70, 30, 45)
  fill(130);
  //fill(120, 90, 70);
  quad(44, 45, 65, 60, 40, 70, 24, 63)
  //fill(160, 130, 110);
  fill(105);
  quad(50, 50, 60, 70, 40, 70, 30, 55)
  fill(50);
  quad(40, 60, 55, 70, 40, 65, 30, 65)
  pop();
}

function drawEve(eveX) {
  push();
  stroke(0, 0, 0);
  translate(eveX, 250);
  fill("rgb(255,255,255)");
  arc(0, 0, 85, 250, 0, PI, PIE);
  ellipse(0, -32, 95, 70);
  ellipse(-45, 55, 20, 100);
  ellipse(45, 55, 20, 100);
  fill("rgb(0,0,0)");
  ellipse(0, -28, 75, 45);
  fill("rgb(0,223,255)");

  if (eveX <= width / 2 + 60 && scene == 1) {
    drawTrashLookingEyes();

  } else {
    ellipse(-17, -30, 20, 13);
    ellipse(17, -30, 20, 13);
  }
  pop();
}

function drawWalle1(x1) {
  push();
  translate(x1, 300);

  fill(205, 171, 104);
  quad(-60, 0, 60, 0, 60, 100, -60, 100);

  stroke(0, 0, 0);
  strokeWeight(5);
  fill(128, 128, 128);
  ellipse(-65, 100, 40, 60);
  ellipse(65, 100, 40, 60);

  strokeWeight(1);
  fill(205, 171, 104);
  quad(-5, 0, 5, 0, 5, -60, -5, -60);

  quad(60, 5, 70, 5, 70, 55, 60, 55);
  quad(60, 5, 70, 5, 70, 55, 60, 55);
  quad(-60, 5, -70, 5, -70, 55, -60, 55);

  fill(255, 255, 255);
  stroke(102, 51, 0);
  strokeWeight(3);
  arc(25, -60, 50, 50, 0, 5 * PI / 4, CHORD);

  arc(-25, -60, 50, 50, 7 * PI / 4, PI, CHORD);
  fill(102, 51, 0)
  ellipse(-25, -55, 22, 22)
  ellipse(20, -55, 22, 22)
  fill(0)
  ellipse(-25, -55, 20, 20)
  ellipse(20, -55, 20, 20)

  stroke(0, 0, 0)
  fill(128, 128, 128)
  quad(-70, 40, -50, 40, -50, 60, -70, 60)
  quad(70, 40, 50, 40, 50, 60, 70, 60)

  noStroke(0)
  fill(0, 0, 255)
  quad(-30, 10, -15, 10, -15, 20, -30, 20)

  fill(255, 0, 0)
  ellipse(30, 15, 10, 10)
  pop();

}

function drawWalle2(x2) {
  push();
  translate(x2, 300);

  fill(205, 171, 104);
  quad(-60, 0, 60, 0, 60, 100, -60, 100);

  stroke(0, 0, 0);
  strokeWeight(5);
  fill(128, 128, 128);
  ellipse(-65, 100, 40, 60);
  ellipse(65, 100, 40, 60);

  strokeWeight(1);
  fill(205, 171, 104);
  quad(-5, 0, 5, 0, 5, -60, -5, -60);

  quad(60, 5, 70, 5, 70, 55, 60, 55);
  quad(60, 5, 70, 5, 70, 55, 60, 55);
  quad(-60, 5, -70, 5, -70, 55, -60, 55);

  fill(255, 255, 255);
  stroke(102, 51, 0);
  strokeWeight(3);
  arc(25, -60, 50, 50, 0, 5 * PI / 4, CHORD);

  arc(-25, -60, 50, 50, 7 * PI / 4, PI, CHORD);
  fill(102, 51, 0)
  ellipse(-25, -55, 22, 22)
  ellipse(20, -55, 22, 22)
  fill(0)
  ellipse(-25, -55, 20, 20)
  ellipse(20, -55, 20, 20)

  stroke(0, 0, 0)
  fill(128, 128, 128)
  quad(-70, 40, -50, 40, -50, 60, -70, 60)
  quad(70, 40, 50, 40, 50, 60, 70, 60)

  noStroke(0)
  fill(0, 0, 255)
  quad(-30, 10, -15, 10, -15, 20, -30, 20)

  fill(255, 0, 0)
  ellipse(30, 15, 10, 10)
  pop();
}

function drawBootplant(x, y) {
  push();
  translate(x, y);
  //plant
  stroke(0, 200, 120);
  strokeWeight(2.5);
  fill(50, 150, 100);
  line(230, 55, 230, 100);
  rect(220, 56, 8, 5, 60, 65, 70);
  rect(233, 57, 8, 5, 60, 65, 70);
  //boot
  noStroke();
  fill(150, 120, 80);
  ellipse(200, 99, 24);
  quad(220, 78, 239, 75, 245, 110, 210, 111)
  quad(205, 93, 241, 80, 245, 110, 200, 111)
  //boot outline
  stroke(70, 50, 30);
  strokeWeight(1.5);
  line(193, 110, 244, 110);
  line(244, 110, 241, 80);
  arc(200, 99, 24, 24, 2 * PI / 3, 0);
  line(210, 93, 216, 90);
  line(216, 90, 220, 79);
  line(220, 79, 239, 75);
  line(239, 75, 241, 80);
  line(241, 80, 228, 82);
  line(228, 82, 225, 92);
  line(225, 92, 211, 95);
  //laces 
  strokeWeight(1);
  line(220, 79, 226, 86);
  line(226, 86, 216, 90);
  line(218, 84, 225, 92);
  line(218, 84, 227, 81);
  pop();
}

function drawTrashLookingEyes() {
  push();
  fill(0, 0, 0);
  ellipse(0, -28, 75, 45);
  fill(0, 223, 255);
  ellipse(-20, -25, 20, 13);
  ellipse(14, -25, 20, 13);
  pop();
}

function drawWalleLookingEyes() {
  push();
  fill(0, 0, 0);
  ellipse(0, -28, 75, 45);
  fill(0, 223, 255);
  ellipse(-20, -30, 20, 13);
  ellipse(14, -30, 20, 13);
  pop();
}

function drawHappyEyes() {
  push();
  fill(0, 0, 0);
  ellipse(0, -28, 75, 45);
  fill(0, 223, 255);
  arc(-17, -28, 20, 15, PI, 0, PIE);
  arc(17, -28, 20, 15, PI, 0, PIE);
  pop();
}

function drawHeart(heartX, heartY, heartS, heartC, heartL) {
  push();
  translate(heartX, heartY);
  scale(heartS);
  fill(heartC);
  noStroke();
  ellipse(0, 0, 20);
  ellipse(20, 0, 20);
  quad(-9, 6, 10, 0, 29, 6, 10, 30);
  //outline
  stroke(heartL);
  strokeWeight(3);
  line(10, 30, 29, 5);
  line(10, 30, -9, 5);
  arc(0, 0, 20, 20, 3 * PI / 3.8, 6 * PI / 3.2);
  arc(20, 0, 20, 20, 3.1 * PI, 4 * PI / 1.85);
  pop();
}

function drawCleanearth(earthX, earthY, earthS) {
  push();
  translate(earthX, earthY);
  scale(earthS);
  image(imgtwo, 0, 0);
  pop();
}

function drawWalleHolding(holdingX) {
  push();
  translate(holdingX, 300)
  //   if (x >= 200) {
  //   x = 0
  // } 
  // x = x + 1;
  //ellipse(0,0,50,50);
  strokeWeight(1)
  stroke(0,0,0)
  fill(205, 171, 104);
  quad(-60, 0, 60, 0, 60, 100, -60, 100)
  // quad(60,100,100,80,100,0,60,0)
  // fill(0,0,0)
  //  ellipse(-65,90,40,60)
  stroke(0, 0, 0)
  strokeWeight(5)
  fill(128, 128, 128);
  ellipse(-65, 100, 40, 60)
  ellipse(65, 100, 40, 60)

  stroke(0, 0, 0)
  strokeWeight(1)
  fill(205, 171, 104);
  quad(-5, 0, 5, 0, 5, -60, -5, -60)

  quad(60, 5, 70, 5, 70, 55, 60, 55)
  quad(60, 5, 70, 5, 70, 55, 60, 55)
  quad(-60, 5, -70, 5, -70, 55, -60, 55)
  // rotate();
  //  ellipse(25,-50,40,30)
  //ellipse(-25,-50,40,30)
  fill(255, 255, 255)
  stroke(102, 51, 0)
  strokeWeight(3)
  arc(25, -60, 50, 50, 0, 5 * PI / 4, CHORD);

  arc(-25, -60, 50, 50, 7 * PI / 4, PI, CHORD);
  fill(102, 51, 0)
  ellipse(-25, -55, 22, 22)
  ellipse(20, -55, 22, 22)
  fill(0)
  ellipse(-25, -55, 20, 20)
  ellipse(20, -55, 20, 20)

  stroke(0)
  strokeWeight(1)
  fill(0, 0, 255)
  quad(-30, 10, -15, 10, -15, 20, -30, 20)

  fill(255, 0, 0)
  ellipse(30, 15, 10, 10)
  stroke(0, 0, 0)
  strokeWeight(1)
  fill(205, 171, 104);
  quad(-70, 55, -45, 55, -45, 45, -70, 45)
  quad(70, 55, 45, 55, 45, 45, 70, 45)
  strokeWeight(3);
  stroke(0, 0, 0);
  fill(128, 128, 128);
  translate(100, 0);
  quad(-70, 40, -50, 40, -50, 60, -70, 60);
  translate(-200, 0);
  quad(70, 40, 50, 40, 50, 60, 70, 60);
  pop();
}

function drawBeach() {

  push();
  //sky
  let g = 255
  let b = 0
  let sunsetY = 0
  for (let sunsetY = 0; sunsetY <= height; sunsetY++) {
    stroke(255, g, b);
    line(0, sunsetY, width, sunsetY);
    g = g - 255 / height;
    b = b + 255 / height;
  }

  //sun
  noStroke();
  fill('#F9BF47')
  arc(300, 280, 120, 120, PI, 0)
  fill('#FFDC6F')
  ellipse(300, 280, 100)

  //ocean
  fill(0, 80, 150)
  noStroke();
  rect(0, 270, width, 80)

  //ocean lines
  stroke(50, 150, 250);
  line(0, 280, 60, 280);
  line(30, 290, 50, 290);
  line(170, 280, 180, 280);
  line(240, 300, 280, 300);
  line(205, 285, 260, 285);
  line(105, 307, 150, 307);
  line(375, 325, 400, 325);
  line(340, 290, 350, 290);
  line(200, 315, 215, 315);
  line(335, 300, 385, 300);
  line(65, 320, 115, 320);
  line(570, 280, 580, 280);
  line(540, 300, 580, 300);
  line(505, 285, 560, 285);
  line(405, 307, 450, 307);
  line(480, 320, 525, 320);

  ellipse(200, 360, 40, 20)

  //sand
  fill("#F5F2DD");
  noStroke();
  rect(0, 330, width, 100);

  pop();

}

function drawCostume(costumeX, costumeY) {
  push();
  translate(costumeX, costumeY);
  // afro
  noStroke();
  fill(20, 250, 160);
  ellipse(280, 130, 40);
  fill(250, 230, 0);
  ellipse(250, 130, 30);
  fill(200, 20, 20);
  ellipse(225, 155, 20);
  fill(200, 0, 70);
  ellipse(235, 180, 40);
  fill(255, 190, 0);
  ellipse(250, 150, 50);
  fill(255, 70, 70);
  ellipse(250, 165, 40);
  ellipse(230, 155, 20);
  fill(250, 70, 70);
  ellipse(240, 180, 30);
  fill(250, 250, 0);
  ellipse(270, 140, 25);
  ellipse(270, 160, 25);
  fill(255, 200, 0);
  ellipse(255, 150, 20);
  fill(255, 200, 0);
  ellipse(260, 165, 25);
  fill(255, 255, 0)
  ellipse(290, 165, 15);
  fill(20, 250, 160);
  ellipse(300, 173, 10);
  ellipse(300, 150, 30);
  fill(250, 250, 0);
  ellipse(280, 150, 30);
  fill(20, 250, 160);
  ellipse(305, 165, 15);

  //polka dots 
  fill(255, 200, 0);
  ellipse(180, 220, 10, 13);
  fill(250, 100, 250);
  ellipse(250, 220, 10);
  fill(20, 250, 160)
  ellipse(190, 190, 10);
  fill(240, 190, 255);
  ellipse(215, 255, 11, 9);
  fill(100, 200, 255);
  ellipse(150, 190, 11, 9);

  //tassles
  fill('#FC97B2');
  quad(135, 160, 145, 170, 145, 175, 135, 185);
  quad(120, 202, 130, 207, 130, 212, 122, 223);
  quad(200, 285, 207, 285, 210, 295, 190, 290);
  quad(202, 325, 208, 325, 215, 335, 190, 335);
  fill(100, 210, 250)
  quad(160, 130, 185, 127, 185, 133, 168, 145)
  pop();
}

function mouseClicked() {
  if (mouseX < 600 &&
      mouseX > 0 && 
      mouseY > 350 && 
      mouseY < 400) {
    clicked = !clicked;
    y = 0;
  }
}