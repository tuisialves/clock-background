var myImg;

function preload() {
  myImg = loadImage("assets/denmark2.jpg");
}

function setup() {
  	createCanvas(windowWidth, windowHeight);
}


function draw() {
    translate(0, -0*(height/17));
    background(myImg)    
    textFont('Anton')
    fill(255)
    textSize(height/4)
    textAlign(CENTER)
    text(hour(),width/2,height/3)
    textSize(height/4)
    textAlign(CENTER)
    text(minute(),width/2,height/3*2)
    textSize(height/4)
    textAlign(CENTER)
    text(second(),width/2,height/3*3)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
