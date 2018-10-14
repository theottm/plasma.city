var canvas;

function setup() {
	
	// We are still calling createCanvas like in the past, but now 
	// we are storing the result as a variable. This way we can 
	// call methods of the element, to set the position for instance.
	canvasHeight = 200;
	canvas = createCanvas(windowWidth, canvasHeight);
	console.log("windowWidth : ", windowWidth);
	// Here we call methXSods of each element to set the position 
	// and id, try changing these values.
	// Use the inspector to look at the HTML generated from this 
	// code when you load the sketch in your browser.
	canvas.parent("p5")
}

var values = [];
values[0] = [0,0];
values[1] = [10,20];
values[2] = [20, 50];
values[3] = [10,30];

var newDate = Date.now();

function draw() {
	background(250);
	// noStroke();
	graph();
	coord([mouseX, mouseY]);
	// cadrillage, coordonnées, fond
	
	if (mouseIsPressed) {
		fill(250, 0, 0, 150);
	} else {
		fill(0, 0, 250, 150);
	};
}

function coord(position){
	text("x : " + str(position[0]), position[0], position[1] -15);
	text("y : " + str(position[1]), position[0], position[1])
}

function cross(position){
	crossW = 10;
	crossH = 10;
	line(position[0], position[1] + crossH, position[0], position[1] - crossH); // x axe
	line(position[0] - crossW, position[1], position[0] + crossW, position[1]); // y axe
}


function graph(){
	// update points
	waitTime = 1000/24*16
	if (mouseIsPressed){
		waitTime = 1000/24*4
	}
	if (Date.now() - newDate > waitTime){
		values[7] = values[6];
		values[6] = values[5];
		values[5] = values[4];
		values[4] = values[3];
		values[3] = values[2];
		values[2] = values[1];
		values[1] = values[0];
		values[0] = [mouseX, mouseY];
		newDate = Date.now();
	}
	// draw last updated points
	graphCurve(values);
	// graphLine(values);
	graphPoint(values);
	// add mean
}

function graphPoint(points){
	alpha = 250;
	i = 1;
	while (i < points.length - 4 ){
		radius = 10
		fill(i*50, 250-i*20, 250-i*100, alpha)
		ellipse(points[i][0], points[i][1], radius, radius);
		if (i<4){
			cross(points[i])
			coord(points[i])
		}
		i++;
	}
}

function graphLine(points){
	i = 0;
	while (i < points.length - 2){
		line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
		i++;
	}
}

function graphCurve(points){
	i = 0;
	beginShape();
	while (i < points.length - 3 ){
		curveVertex(points[i][0], points[i][1]);
		i++;
	}
	endShape();
}


// function graphCurve(points){
// 	curve(points[0][0], points[0][1], points[1][0], points[1][1], points[2][0], points[2][1], points[3][0], points[3][1]);
// 	curve(points[1][0], points[1][1], points[2][0], points[2][1], points[3][0], points[3][1]);
// 	curve(points[2][0], points[2][1], points[3][0], points[3][1]);
// }

