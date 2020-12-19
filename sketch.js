const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
    
    box = new Box(200,300,80,100);
   
    box2 = new Box(240,100,70,70);
    ground = new Ground(200,399,399,20);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box.display();
    box2.display();
    ground.display();
}