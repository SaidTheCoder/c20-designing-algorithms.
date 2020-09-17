var f1,m1;



function setup() {
  createCanvas(1200,800);
  m1 = createSprite(700,400,130,130);
  m1.shapeColor = "red";
  f1 = createSprite(600,400,130,130);
  f1.shapeColor = "blue";
  m1.velocityY=-5;
  f1.velocityY=5;
}

function draw() {
  background("black");  
  //m1.x=World.mouseX;
 // m1.y=World.mouseY;


  
  if(m1.x-f1.x<f1.width/2+m1.width/2
    && f1.x-m1.x<f1.width/2+m1.width/2){
     m1.velocityX=m1.velocityX*(-1);
     f1.velocityX=f1.velocityX*(-1);
    }

    if(m1.y-f1.y<f1.height/2+m1.height/2
      && f1.y-m1.y<f1.height/2+m1.height/2){
        m1.velocityY=m1.velocityY*(-1);
        f1.velocityY=f1.velocityY*(-1);
      }
 /* if(m1.x-f1.x<f1.width/2+m1.width/2
    && f1.x-m1.x<f1.width/2+m1.width/2
    && m1.y-f1.y<f1.height/2+m1.height/2
    && f1.y-m1.y<f1.height/2+m1.height/2){
   m1.shapeColor="yellow";
  f1.shapeColor="yellow";
   }
  else{
    m1.shapeColor="red"
    f1.shapeColor="blue"
  }*/
  drawSprites();
}