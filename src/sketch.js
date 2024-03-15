let timer = 0;

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);

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
