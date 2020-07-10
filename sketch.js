var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles;
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var turn = 0;
gamestate = "play";
//var particle;
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
  textSize(30);
  text("500",18,550);
  text("500",98,550);
  text("500",178,550);
  text("500",258,550);
  text("100",338,550);
  text("100",418,550);
  text("100",498,550);
  text("200",578,550);
  text("200",658,550);
  text("200",738,550);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  /* if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(gamestate === "play"){
   mousePressed();

   if(particles !== null){
    particles.display();
     if(particles.body.position.y > 760){
       if(particles.body.position.x < 300){
         score = score+500;
        // particles = null;
         if(turn >= 5) gamestate = "end";
       }
     }
   }

   if(particles !== null){
    particles.display();
    if(particles.body.position.y > 760){
      if(particles.body.position.x > 301 && particles.body.position.y < 600){
        score = score+100;
        //particles = null;
        if(turn >= 5) gamestate = "end";
      }
    }
  }

  if(particles !== null){
    particles.display();
    if(particles.body.position.y > 760){
      if(particles.body.position.x > 601 && particles.body.position.y < 900){
        score = score+500;
        //particles = null;
        if(turn >= 5) gamestate = "end";
      }
    }
  }
   }

  if(gamestate === "end"){
    textSize(50);
    text("GameOver",400,400);
  }
}

function mousePressed(){
  if(gamestate !== "end"){
    turn++;
    particles = new Particle(mouseX,10,10,10);
  }
}