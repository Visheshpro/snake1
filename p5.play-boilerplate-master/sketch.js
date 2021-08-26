const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Constraint = Matter.Constraint

function setup() {
  createCanvas(800,400);

  engine = Engine.create()
  world = engine.world

rec = new Pendulum(200, 200, 1, 1,true)

pendulum1 = new Pendulum(200, 200, 25, 200)
joint1 = new Joint(pendulum1.pendulum, rec.pendulum)
pendulum2 = new Pendulum(200,400, 25, 200)
joint2 = new Joint(pendulum1.pendulum,pendulum2.pendulum)

  Engine.run(engine)
}

function draw() {
  background(255,255,255);  
  
pendulum1.display()
pendulum2.display()
  drawSprites();
}