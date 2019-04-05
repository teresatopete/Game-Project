//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;
let mySound;

function preload (){
  soundFormats('mp3','wav');
   mySound = loadSound('laser.wav')
}


function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3);

}


function draw(){
	background(0);
  fill("blue")
ellipse(450,100,140,140)
fill(59, 247, 234)
ellipse(435,75,100,5)
ellipse(470,115,150,5)
  fill("yellow")
  ellipse(56,46,40,40)

  me.drawMe();
  me.moveMe();

  if (frameCount % 5 == 0) {
      let  b = new Ball(width, random(0,height), -3, false);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
          balls[i].bounceWall();


	  }

    }




//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed= speed;

	}

	drawMe(){  // draw the running person
    		stroke(200, 55, 229);
        strokeWeight(3);
    		fill("blue");
		    ellipse(this.x,this.y-10,20,20);
        line(this.x,this.y, this.x, this.y+40);//body
        line(this.x, this.y+40, this.x-20, this.y+70);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x+30, this.y-15);//short arm
        line(this.x+1, this.y+25, this.x+40, this.y-20);//long arm
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
	}

  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed, hitLorenzo){
		this.x = x;
    this.y = y;
    this.speed = speed;
    this.hitLorenzo = hitLorenzo;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(1);
    	fill(random(255),random(255),random(255));
		  ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed*1.5;
		this.y = this.y+.5;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-30 && this.x <= me.x+30 && this.y > me.y-40 && this.y < me.y+40){
      			this.speed = -this.speed;
            this.hitLorenzo = true;
            mySound.setVolume(0.1);
            mySound.play();
       }
    }

    bounceWall(){
        if (this.x > width-10 && this.hitLorenzo==true){
            this.speed = -this.speed;
       }
    }
}
