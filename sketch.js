const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
//var plinko,particle;
var div1,div2,div3,div4;
var div5,div6,div7;
var div8,div9;
var border1,border2;
//var border3;

var particles = [];
var plinkos = [];

function setup() {
  createCanvas(480,650);

  engine = Engine.create();
  world = engine.world;
  
  //Creating particles
  

  //Creating plinko's

for(var k=40; k<=width; k=k+50)  {
  plinkos.push (new Plinko(k,75,3));
}

for(var j=15; j<=width-10; j=j+50){
 plinkos.push(new Plinko(j,175,3));
}

for(var l=40; l<=width-10; l=l+50){
  plinkos.push(new Plinko(l,275,3));
 }

 for(var m=15; m<=width-10; m=m+50){
  plinkos.push(new Plinko(m,375,3));
 }
 

//console.log(plinkos);
    
  //Create bodies here
   ground = new Ground(240,640,480,10);
   div8 = new Division(5,535,10,200);
   div1 = new Division(60,535,10,200);
   div2 = new Division(120,535,10,200);
   div3 = new Division(180,535,10,200);
   div4 = new Division(240,535,10,200);
   div5 = new Division(300,535,10,200);
   div6 = new Division(360,535,10,200);
   div7 = new Division(420,535,10,200);
   div9 = new Division(475,535,10,200);
   border1 = new Border(5,215,8,440);
   border2 = new Border(476,215,8,440);
   //border3 = new Border(240,2,480,8);
   //particle = new Particle(200,200,-5);

  Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(0);  
   ground.display();
   div1.display();
   div2.display();
   div3.display();
   div4.display();
   div5.display();
   div6.display();
   div7.display();
   div8.display();
   div9.display();
   border1.display();
   border2.display();
   //border3.display();
  //particle.display();

  if(frameCount %60===0){
    particles.push(new Particle(random(width/2-10,width/2+10), 10,10));
 }

   for(var j = 0; j<particles.length; j++){
     particles[j].display();
   }

   for(var j = 0; j<plinkos.length; j++){
    plinkos[j].display();
  }


  drawSprites();
}


