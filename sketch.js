const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;
let engine;
let world;

var pb;
var ball;
var pen;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  pb=createImg("push.png");
  pb.position(50,50);
  pb.size(25,25);
  pb.mouseClicked(pforce)
  
  var balloptions={
    restitution:2,
    frictionAir:0.02,
    density:0.3
  }

  ball=Bodies.circle(200,200,25,balloptions);
  World.add(world,ball);
  
  var penoptions={
    pointA:{x:200,y:50},
    bodyB:ball,
    length:100,stiffness:0.1
  }

pen=Constraint.create(penoptions);
World.add(world,pen);

}

function draw() 
{
  background(0);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,25,25);

  push();
  strokeWeight(3);
  stroke(255);
  line(pen.pointA.x,pen.pointA.y,ball.position.x,ball.position.y);
  pop();
}

function pforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:0})
}
