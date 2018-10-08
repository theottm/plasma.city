var canvas;
var leftBuffer;
var rightBuffer;

function setup() {
	
  // We are still calling createCanvas like in the past, but now 
  // we are storing the result as a variable. This way we can 
  // call methods of the element, to set the position for instance.
  canvas = createCanvas(windowWidth, 50);

  // Here we call methods of each element to set the position 
  // and id, try changing these values.
  // Use the inspector to look at the HTML generated from this 
  // code when you load the sketch in your browser.
	canvas.parent("p5")

    leftBuffer = createGraphics(400, 400);
    rightBuffer = createGraphics(400, 400);
}

function draw() {
    // Draw on your buffers however you like
    drawLeftBuffer();
    drawRightBuffer();
    // Paint the off-screen buffers onto the main canvas
    image(leftBuffer, 0, 0);
    image(rightBuffer, 400, 0);
}

function drawLeftBuffer() {
    leftBuffer.background(0, 0, 0);
    leftBuffer.fill(255, 255, 255);
    leftBuffer.textSize(32);
    leftBuffer.text("This is the left buffer!", 50, 50);
}

function drawRightBuffer() {
    rightBuffer.background(255, 100, 255);
    rightBuffer.fill(0, 0, 0);
    rightBuffer.textSize(32);
    rightBuffer.text("This is the right buffer!", 50, 50);
}

// function draw() {
//   if (mouseIsPressed) {
//     fill(0);
//   } else {
//     fill(255);
//   }
// 	ellipse(mouseX, mouseY, 80, 80);
// }
