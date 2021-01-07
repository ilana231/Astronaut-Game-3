
var astronaut, astronaut_floating
var alien, alien_ufo
var backdrop, background_moving
var backdroptwo, backdrop_moving


function preload() {
astronaut_floating = loadImage("astronaut floating 2.png");
alien_ufo = loadImage("flying saucer.png");
background_moving= loadImage("space img.jpg");
backdrop_moving= loadImage("space 3.jpg");

}


function setup() {
  createCanvas(displayWidth,displayHeight);
  backdrop = createSprite(600,400,600,600);
  backdroptwo = createSprite(2 * displayWidth,400,600,600);
  backdrop.addImage("moving",background_moving);
  backdroptwo.addImage("moving 2",backdrop_moving);
  backdrop.scale = 2;
  backdroptwo.scale = 2;
  backdrop.x = backdrop.width/2;
  backdroptwo.x = backdrop.width * 2.5;
  astronaut = createSprite(600, 500, 50, 50);
  alien = createSprite(200,500,50,50);
  astronaut.addImage("floating",astronaut_floating);
  astronaut.scale = 0.1;
  alien.addImage("ufo",alien_ufo);
  alien.scale = 0.5;
}


function draw() {
  background(255,255,255);
  backdrop.velocityX = -5;
  backdroptwo.velocityX = -5; 

  //if(backdrop.x < 0) {
    //backdrop.x = backdrop.width/2
  //}

  if(keyDown(UP_ARROW)){
    astronaut.y = astronaut.y - 5
  }

  if(keyDown(DOWN_ARROW)) {
    astronaut.y = astronaut.y + 5
  }
  

  drawSprites();
}