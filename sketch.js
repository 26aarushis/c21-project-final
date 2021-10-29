
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj; 
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(950, 450);

	var ball_options ={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100,200,10,ball_options);
	World.add(world, ball);

	groundObj = new Ground(width/2,400,width,20);

	leftSide = new Ground(530,350,10,80);

	rightSide = new Ground(650,350,10,80)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display();

  leftSide.display();
  rightSide.display();

  Engine.update(engine);

  ellipseMode(RADIUS);

  ellipse(ball.position.x,ball.position.y,10)

  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		//console.log("up");
		Matter.Body.applyForce(ball,{x:0,y:0},{x:4,y:2});
	}


	
}
