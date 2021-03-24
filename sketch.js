const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

var score =0;
var particle;
var count =0;

var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  text("500", 30, 530)
  text("500", 100, 530)
  text("500", 190, 530)
  text("500", 280, 530)
  text("100", 350, 530)
  text("100", 420, 530)
  text("100", 510, 530)
  text("200", 600, 530)
  text("200", 680, 530)
  text("200", 750, 530)
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 // if(particle !== null){
  //particle.display();
 // }
 
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

/*function mousePressed(){
  if (gameState !== "end"){
      count++;
      particle = new Particle((Math.round(random(0, 400)), 700, 10))
  }
}*/

