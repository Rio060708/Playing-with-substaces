const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    Eraser = new Rubber(200,200,40);
    stone = new Rock(500,200,50);
    metal = new Iron(700,200,60);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    Eraser.display();
    plane.display();
    hammer.display();
    stone.display();
    metal.display();
 
}