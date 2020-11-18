const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var base1;
var side1, side2;

function setup() {
 var canvas= createCanvas(480,800);
 engine = Engine.create();
 world = engine.world; 

  //createSprite(400, 200, 50, 50);

  ground= new Ground(width/2,height,width,20);
  base1= new Ground(width/2,790,width,10);

  
  


 for (var k=0; k<=width; k=k+80)
 {
   divisions.push(new Division(k,height-divisionHeight/2, 10, divisionHeight))
 
  }
  for(var j=40; j<=width; j=j+50)
  {
  plinkos.push(new Plinko(j,75,10));
  }

  for(var j=15; j<=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,175,10));
}

for(var j=40; j<=width; j=j+50)
{
  plinkos.push(new Plinko(j,275,10));
}

for(var j=15; j<=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,375,10));
}


 



}





function draw() {
  background("black"); 
Engine.update(engine);
  
fill("brown");
ground.display();
fill("white");
base1.display();


for (var k=0; k<plinkos.length; k++)
{
  plinkos[k].display();
}

for (var k=0; k<particles.length; k++)
{
  particles[k].display();
}



for(var k=0; k< divisions.length; k++)
{
  divisions[k].display();
}

if(frameCount%90 === 0)
  {
    particles.push(new Particle(random(width/2-90,width/2+90),random(0,40),6))
  }






 // drawSprites();
  
}