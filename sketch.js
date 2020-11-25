var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(1000, 400,80,30);
  movingRect.shapeColor = "green";
movingRect.velocityX=-2
 fixedRect.velocityX=2

}

function draw() {
  background(0,0,0);  
  

  Bounce_off(movingRect, fixedRect)
    
  
  drawSprites();
}

function Bounce_off(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX=object1.velocityX*(-1)
    object2.velocityX=object2.velocityX*(-1)
    
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2){
      object1.velocityY=object1.velocityY*(-1)
      object2.velocityY=object2.velocityY*(-1)
      
    }
}