const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  

  pig1 = new Pig(810,350)
     box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground1=new Ground(600,390,1200,20)
    stick1=new Stick(810,260,300,PI/2)
    pig2=new Pig(810,220);
    box3=new Box(700,240,70,70);
    box4=new Box(920,240,70,70);
    stick2=new Stick(810,180,300,PI/2);
    box5=new Box(810,160,70,70);
    stick3=new Stick(760,120,150,PI/7);
    stick4=new Stick(870,120,150,-PI/7);
    bird=new Bird(mouseX,mouseY);
}

function draw(){
    background(0);
    Engine.update(engine);
       
        box2.display();
    box1.display();
    
    ground1.display();
    pig1.display();
    stick1.display();
    box3.display();
    stick2.display();
    box4.display();
    pig2.display();
    stick3.display();
    stick4.display();
    box5.display();
    bird.display();
}
