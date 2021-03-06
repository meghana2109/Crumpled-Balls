
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;


	ground = new Ground(400,650,800,30);
	ball = new Ball(50,50,20);
	dustbin1 = new DustBin(450,585,30,100);
	dustbin2 = new DustBin(700,585,30,100);
	dustbin3 = new DustBin(575,620,220,30);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);

  ground.display();
  ball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.position,{x:50,y:-85});
	}
}



