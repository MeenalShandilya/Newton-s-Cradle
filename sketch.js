
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

roof = new Roof(400,100,200,20);
ball1 = new Ball(400,400);
ball2 = new Ball(360,400);
ball3 = new Ball(320,400);
ball4 = new Ball(440,400);
ball5 = new Ball(480,400);

chain1 = new Chain(roof.body,ball1.body,0);
chain2 = new Chain(roof.body,ball2.body,-40);
chain3 = new Chain(roof.body,ball3.body,-80);
chain4 = new Chain(roof.body,ball4.body,40);
chain5 = new Chain(roof.body,ball5.body,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof.display();

  drawSprites();
 
}
function keyPressed() {
  if (keyCode===UP_ARROW) {
      Matter.Body.applyForce(ball3.body,ball3.body.position,{x:-40,y:-40});
  }
}


