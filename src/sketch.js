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

