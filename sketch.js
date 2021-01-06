
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var g;
var bin,bin1,bin2,bin3;
var _paper;

function preload() {
	
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	g = new Ground(500,650,1000,20);

//	bin1 = new Bin(800,630,250,20);
//	bin2 = new Bin(670,565,20,150);
//	bin3 = new Bin(914,565,20,150);
	bin = new Bin(792,550,200,200);
	
	_paper = new Paper(175,100,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  _paper.display();
  g.display();
  bin.display();
//  bin1.display();
  //bin2.display();
  //bin3.display();


  
  keyPressed();
  drawSprites();
 
}

function keyPressed() {	
	if (keyDown(UP_ARROW)) {
		Matter.Body.applyForce(_paper.body,_paper.body.position,{x:20,y:-49});
	}

	if (keyDown(DOWN_ARROW)) {
		Matter.Body.applyForce(_paper.body,_paper.body.position,{x:-20,y:-49});
	}

	if (keyDown(RIGHT_ARROW)) {
		Matter.Body.applyForce(_paper.body,_paper.body.position,{x:20,y:49});
	}

	if (keyDown(LEFT_ARROW)) {
		Matter.Body.applyForce(_paper.body,_paper.body.position,{x:-20,y:49});
	}
}


