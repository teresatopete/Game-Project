
//create an empty array called balls

let balls = [];
let mySound;

function setup() {
  createCanvas(800, 400);

}
function preload {
  soundformats('mp3','ogg');
  mySound = loadSound('laser.wav')
}
function draw(){
	background(69, 196, 47);

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
	  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  let  b = new Ball(100, 100);
  balls.push(b);
  console.log(balls);
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
	}

	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(195, 42, 237);
		    triangle(this.x,this.y,this.x-10,this.y+10,this.x+10,this.y+10);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;
	}


}
