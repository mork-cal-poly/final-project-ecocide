let timer = 0;

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);

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
}

function drawWalle(x){
  push();
  translate(x,200)
  //   if (x >= 200) {
  //   x = 0
  // } 
  // x = x + 1;
  //ellipse(0,0,50,50);
   fill(205,171,104);
  quad(-60,0,60,0,60,100,-60,100)
 // quad(60,100,100,80,100,0,60,0)
 // fill(0,0,0)
 //  ellipse(-65,90,40,60)
  stroke(0,0,0)
  strokeWeight(5)
   fill(128,128,128);
  ellipse(-65,100,40,60)
  ellipse(65,100,40,60)
  
   strokeWeight(1)
   fill(205,171,104);
  quad(-5,0, 5,0,5,-60,-5,-60)
  
  quad(60,5,70,5,70,55,60,55)
  quad(60,5,70,5,70,55,60,55)
  quad(-60,5,-70,5,-70,55,-60,55)
  // rotate();
//  ellipse(25,-50,40,30)
  //ellipse(-25,-50,40,30)
  fill(255,255,255)
  stroke(102,51,0)
  strokeWeight(3)
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


