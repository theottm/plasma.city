var canvas;

function setup() {
	
  // We are still calling createCanvas like in the past, but now 
  // we are storing the result as a variable. This way we can 
  // call methods of the element, to set the position for instance.
  canvas = createCanvas(windowWidth, 100);

  // Here we call methods of each element to set the position 
  // and id, try changing these values.
  // Use the inspector to look at the HTML generated from this 
  // code when you load the sketch in your browser.
	canvas.parent("p5")
}


function draw() {
  if (mouseIsPressed) {
      fill(0, 50, 50, 150);
  } else {
      fill(150, 50, 0, 50);
  }
	ellipse(mouseX, mouseY, 80, 80);
}
