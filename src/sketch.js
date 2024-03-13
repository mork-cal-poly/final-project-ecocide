let timer = 0;

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);

  if (timer > 60 && timer < 100) {
    text("Hi!", 200, 200);
  }
  timer++;
  
  drawTrash(200, 200, 1.2);
  drawBootplant(0, 100);
}

function drawTrash(x, y, s) {
  push();
  scale(s);
  translate(x, y);
  stroke(80);
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


