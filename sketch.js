const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  

  character = new Character(300, 200);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  drawSprites();
  character.display();

}