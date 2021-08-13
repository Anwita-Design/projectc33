const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var bgImage
var snow, snowImage

function setup() {
  engine = Engine.create();
    world = engine.world;
  createCanvas(800,400);
  snow = new Snow(random(100,700), 10)
  console.log(snow);
}

function draw() {
  background(bgImage); 
  Engine.update(engine); 
  //drawSprites();
  //spawnSnow();
  snow.display();
  
}
function preload(){
  bgImage = loadImage('snow3.jpg');
 // snowImage = loadImage('snow4.webp');

}
/*
function spawnSnow(){
  if(frameCount%60===0){
    snow= createSprite(random(100,700),-10,10,10)
    snow.velocityY= 3;
    snow.addImage(snowImage);
    snow.scale= 0.09;
    snow.lifetime= 136;
  }
}
*/