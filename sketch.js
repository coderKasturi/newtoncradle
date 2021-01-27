
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var bobDiameter;

var roof;

var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    

	bob1=new Bob(500,500,100);
	bob2=new Bob(380,600,40);
	bob3=new Bob(460,600,40);
	bob4=new Bob(540,600,40);
	bob5=new Bob(620,200,40);
	
	roof=new Roof(680,50,550,20);

	rope1=new Rope(bob1.body, roof.body,-bobDiameter*2,0);
	rope2=new Rope(bob2.body, roof.body,-bobDiameter*2,0);
	rope3=new Rope(bob3.body, roof.body,-bobDiameter*2,0);
	rope4=new Rope(bob4.body, roof.body,-bobDiameter*2,0);
	rope5=new Rope(bob5.body, roof.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  drawSprites();

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



