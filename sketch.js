var block1,block2;
function setup() {
  createCanvas(800,400);
  block1 = createSprite(400, 200, 50, 50);
  block2 = createSprite(200,100,40,30);
  block1.shapeColor = "blue";
  block2.shapeColor = "blue";
}

function draw() {
  background(255,255,255);
  block2.x = World.mouseX;
  block2.y = World.mouseY;
  if (block2.x-block1.x<block1.width/2+block2.width/2 && block1.x-block2.x<block1.width/2+block2.width/2 &&  block1.y-block2.y<block1.height/2+block2.height/2 && block2.y-block1.y<block1.height/2+block2.height/2) {
    block1.shapeColor = "yellow";
    block2.shapeColor = "yellow";
  } 
   else{
    block1.shapeColor = "blue";
    block2.shapeColor = "blue";
   }
  
  console.log(block2.x-block1.x);
  drawSprites();
} 