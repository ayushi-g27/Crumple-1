
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Trash1, paperObject,groundObject;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,620,width,20);
	Trash1=new Trash(1200,510,20,200);
	Trash2=new Trash(1000,510,20,200);
	Trash3=new Trash(1100,600,200,20);
	//Create a Ground


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
 
  
  paperObject.display();
  groundObject.display();
  Trash1.display();
  Trash2.display();
  Trash3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

  
	}
}


