var girl,girlImg;
var path,pathImg;
var sound,girlfallImg;
var gameOverImg;
var resetImg;
var diamondsImg;
var dianosaurImg;
var girlstandingImg;




function preload(){
   girlImg=loadAnimation("run1.png","run2.png","run3.png","run4.png");
 girlstandingImg=loadImage("standing.png");
girlfallImg=loadImage("fall.png");
gameOverImg=loadImage("gameover.png");
pathImg=loadImage("road.jpg");
resetImg=loadImage("reset button.png");
dianosaurImg=loadImage("dianosaur-.png");
diamondsImg=loadImage("diamond.png");
sound=loadSound("sound.wav");
speed=loadImage("speed.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;
}

function draw() {

  
  background(0);
  
  if(path.y > height ){
    path.y = height/2;
  }
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,width-150,30);
  }