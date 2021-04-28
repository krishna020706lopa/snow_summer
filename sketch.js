const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var snow = [];
var bg;

function setup() {
 createCanvas(1000, 800);

	engine = Engine.create();
	world = engine.world;
  
	bg = new Bg(800, 500,500,200);
	

  Engine.run(engine);
}

function draw() {
    rectMode(CENTER);
    
    background("bg");
    Engine.update(engine)
    bg.display()
    if(frameCount%60===0) {
      snow.push(new Snow(random(100, 700), 30, 30))
      
    }
  
    for(var j = 0; j<snow.length; j++) {
      snow[j].display()
    }
   
    if(frameCount%60===0) {
      snow.push(new Snow(random(200, 500), 30, 30))
    }
  
    for(var j = 0; j<snow.length; j++) {
      snow[j].display()
    }
  
    if(frameCount%60===0) {
      snow.push(new Snow(random(200, 400), 30, 30))
    }
  
    for(var j = 0; j<snow.length; j++) {
      snow[j].display()
    }
  
    if(frameCount%60===0) {
      snow.push(new Snow(random(250, 300), 30, 30))
    }
  
    for(var j = 0; j<snow.length; j++) {
      snow[j].display()
    }
  
    if(frameCount%60===0) {
      snow.push(new Snow(random(100, 700), 30, 30))
    }
  
    for(var j = 0; j<snow.length; j++) {
      snow[j].display()
    }
  
    if(frameCount%60===0) {
      snow.push(new Snow(random(100, 700), 30, 30))
    }
  
    for(var j = 0; j<snow.length; j++) {
      snow[j].display()
    }
  
    
    drawSprites();
  }
  
  
  
  
  