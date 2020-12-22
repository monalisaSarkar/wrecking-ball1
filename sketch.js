const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var bob,ground,bar1,box1,box2;
function setup(){
  createCanvas(600,300)
  engine=Engine.create();
  world=engine.world;
  
  ground=new Ground(300,280,600,20);
  //bar1=new Ground(200,80,100,10);
  box1=new Box(400,200,50,50);
  box2=new Box(400,200,50,50);
  box3=new Box(400,200,50,50);
  box4=new Box(400,200,50,50);
  box5=new Box(500,200,50,50);
  box6=new Box(500,200,50,50);
  box7=new Box(500,200,50,50);
  box8=new Box(500,200,50,50);

  bob =new Bob (300,50,40,40); 

  chain=new Chain(bob.body,{x:200,y:50});

}
function draw(){
  background("green")
Engine.update(engine);
bob.display();
ground.display();
//bar1.display();
chain.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
}
function mouseDragged(){
  Matter.Body.setPosition(bob.body,{x:mouseX,y:mouseY});
}
