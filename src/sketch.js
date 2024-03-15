let timer = 0;
let img;
let imgone;
let x = 200;
let x1  = -100;
let x2 = -100;

function preload() {
  img = loadImage('assets/walle-earth copy.png');
  imgone = loadImage('assets/martyplain.png');
}
function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);

  // if (timer > 60 && timer < 100) {
  //   text("Hi!", 200, 200);
  // }
  // timer++;
  drawMarty(100, 100);
    drawWalleworld(-50, 0, 0.3);  
    drawTrashOne(200, 200, 1.2);
    drawTrashTwo(300, 250, 1);
    drawBootplant(0, 100);
    
    drawWalle1(x1);
    x1 = x1 + 10; 
    
    if (x1 >= 750) {
    drawWalleworld(0, 0, 0.3);
    drawWalle2(x2);
    x2 = x2 + 1;
    if (x2 >= width/2 - 100) {
      x2 = width/2 - 100;
    }
    }
    
  }
  
  function drawWalleworld(x, y, s){
    push();
      translate(x, y);
      scale(s)
      image(img, 0, 0);
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
  
  function drawEve(eveX, eveY) {
    translate(eveX, eveY);
    fill("rgb(255,255,255)");
    arc(0, 0, 85, 250, 0, PI, PIE);
    ellipse(0, -32, 95, 70);
    ellipse(-45, 55, 20, 100);
    ellipse(45, 55, 20, 100);
    fill("rgb(0,0,0)");
    ellipse(0, -28, 75, 45);
    fill("rgb(0,223,255)");
  
    ellipse(-17, -30, 20, 13);
    ellipse(17, -30, 20, 13);
  }
  
  function drawWalle1(x1){
    push();
    translate(x1,200);
  
    fill(205,171,104);
    quad(-60,0,60,0,60,100,-60,100);
  
    stroke(0,0,0);
    strokeWeight(5);
    fill(128,128,128);
    ellipse(-65,100,40,60);
    ellipse(65,100,40,60);
  
    strokeWeight(1);
    fill(205,171,104);
    quad(-5,0, 5,0,5,-60,-5,-60);
  
    quad(60,5,70,5,70,55,60,55);
    quad(60,5,70,5,70,55,60,55);
    quad(-60,5,-70,5,-70,55,-60,55);
  
    fill(255,255,255);
    stroke(102,51,0);
    strokeWeight(3);
    arc(25, -60, 50, 50, 0, 5*PI/4, CHORD);
  
    arc(-25, -60, 50, 50, 7*PI/4, PI, CHORD);
    fill(102,51,0)
    ellipse(-25,-55,22,22)
    ellipse(20,-55,22,22)
    fill(0)
    ellipse(-25,-55,20,20)
    ellipse(20,-55,20,20)
    
    stroke(0,0,0)
    fill(128,128,128)
    quad(-70,40,-50,40,-50,60,-70,60)
    quad(70,40,50,40,50,60,70,60)
    
    noStroke(0)
    fill(0,0,255)
    quad(-30,10,-15,10,-15,20,-30,20)
    
    fill(255,0,0)
    ellipse(30,15,10,10)
  
    
  
    
  // ellipseMode(RADIUS);
  // fill(255);
  // ellipse(0, 0, 30, 30);
  // ellipseMode(CENTER);
  // fill(100);
  // ellipse(0, 0, 30, 30);
    pop()
  
  }
  
  function drawWalle2(x2){
    push();
    translate(x2,200);
  
    fill(205,171,104);
    quad(-60,0,60,0,60,100,-60,100);
  
    stroke(0,0,0);
    strokeWeight(5);
    fill(128,128,128);
    ellipse(-65,100,40,60);
    ellipse(65,100,40,60);
  
    strokeWeight(1);
    fill(205,171,104);
    quad(-5,0, 5,0,5,-60,-5,-60);
  
    quad(60,5,70,5,70,55,60,55);
    quad(60,5,70,5,70,55,60,55);
    quad(-60,5,-70,5,-70,55,-60,55);
  
    fill(255,255,255);
    stroke(102,51,0);
    strokeWeight(3);
    arc(25, -60, 50, 50, 0, 5*PI/4, CHORD);
  
    arc(-25, -60, 50, 50, 7*PI/4, PI, CHORD);
    fill(102,51,0)
    ellipse(-25,-55,22,22)
    ellipse(20,-55,22,22)
    fill(0)
    ellipse(-25,-55,20,20)
    ellipse(20,-55,20,20)
    
    stroke(0,0,0)
    fill(128,128,128)
    quad(-70,40,-50,40,-50,60,-70,60)
    quad(70,40,50,40,50,60,70,60)
    
    noStroke(0)
    fill(0,0,255)
    quad(-30,10,-15,10,-15,20,-30,20)
    
    fill(255,0,0)
    ellipse(30,15,10,10)
  
    
  
    
  // ellipseMode(RADIUS);
  // fill(255);
  // ellipse(0, 0, 30, 30);
  // ellipseMode(CENTER);
  // fill(100);
  // ellipse(0, 0, 30, 30);
    pop()
  
  }
  
  function drawBootplant(x, y){
    
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
    arc(200, 99, 24, 24, 2*PI/3, 0);
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
  }
  
  