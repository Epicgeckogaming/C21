var fixedRect, movingRect, gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject1.debug=true;
  gameObject2 = createSprite(300,600,50,50);
  gameObject2.shapeColor = "green";
  gameObject2.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    fixedRect.scale = 1.5;
    movingRect.scale = 0.5;
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    fixedRect.scale = 1;
    movingRect.scale = 1;
  }
  if (movingRect.x - gameObject2.x < gameObject2.width/2 + movingRect.width/2
      && gameObject2.x - movingRect.x < gameObject2.width/2 + movingRect.width/2
      && movingRect.y - gameObject2.y < gameObject2.height/2 + movingRect.height/2
      && gameObject2.y - movingRect.y < gameObject2.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
    gameObject2.scale = 1.5;
    movingRect.scale = 0.5;
  }
  else {
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
    gameObject2.scale = 1;
    movingRect.scale = 1;
  }
  if (movingRect.x - gameObject1.x < gameObject1.width/2 + movingRect.width/2
    && gameObject1.x - movingRect.x < gameObject1.width/2 + movingRect.width/2
    && movingRect.y - gameObject1.y < gameObject1.height/2 + movingRect.height/2
    && gameObject1.y - movingRect.y < gameObject1.height/2 + movingRect.height/2) {
  movingRect.shapeColor = "red";
  gameObject1.shapeColor = "red";
  gameObject1.scale = 1.5;
  movingRect.scale = 0.5;
}
else {
  movingRect.shapeColor = "green";
  gameObject1.shapeColor = "green";
  gameObject1.scale = 1;
  movingRect.scale = 1;
}
  drawSprites();
}