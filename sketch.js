var bgImage,girlImage;


function preload() {
  
bgImage = loadImage("images/factory-train-.jpg")
girlImage= loadAnimation("images/girl1.png","images/girl2.png","images/girl3.png","images/girl4.png")
stone1 = loadImage("images/stone1.png");
stone2 = loadImage("images/stone2.png");
stone3 = loadImage("images/stone3.png"); 

}

function setup(){
    createCanvas(885,490);
    //create tom and jerry sprites here

    bg = createSprite(440,250,440,490)
    bg.addImage(bgImage)
   bg.scale=1.5

    girl = createSprite(100,370,20,60)
    girl.addAnimation("running",girlImage)
    girl.scale=0.5

}

function draw() {
 background("lightblue")
   // background(bgImage);
    //Write condition here to evalute if tom and jerry collide

    console.log(bg.height)
   bg.velocityX= -2
    if(bg.x<230){
      bg.x= bg.width/2
    }
    spawnObstacles()
    drawSprites();
}

function spawnObstacles(){
  if(frameCount% 200 === 0){
    var stone = createSprite(890,440,10,50)
    stone.velocityX= -2

    var rand = Math.round(random(1,3));
    switch(rand){
      case 1 : stone.addImage(stone1)
      break;
      case 2 : stone.addImage(stone2)
      break;
      case 3 : stone.addImage(stone3)
      break;
    }
    stone.lifetime=400;
    stone.scale=0.5
  }
}

function keyPressed(){

  //For moving and changing animation write code here


}
