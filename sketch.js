
var astronaut, astronaut_floating
var alien, alien_ufo
var backdrop, background_moving
var backdroptwo, backdrop_moving

var obstaclesGroup, obstacle1,obstacle2,obstacle3,obstacle4,obstacle5



function preload() {
astronaut_floating = loadImage("astronaut floating 2.png");
alien_ufo = loadImage("flying saucer.png");
background_moving= loadImage("space img.jpg");
backdrop_moving= loadImage("space 3.jpg");
obstacle1= loadImage("asteroid.png");
obstacle2= loadImage("rock.png");
obstacle3= loadImage("rock 2.png");
obstacle4= loadImage("little alien.png");
obstacle5= loadImage("satellite.png");

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
  background("#060E1D");
  backdrop.velocityX = -5;
  backdroptwo.velocityX = -5; 

  //if(backdrop.x < 0) {
    //backdrop.x = backdrop.width/2
  //}

  if(backdroptwo.x < 0) {
    backdrop.x = backdrop.width/2;
    backdroptwo.x = backdrop.width * 2.5;
  };

  if(keyDown(UP_ARROW)){
    astronaut.y = astronaut.y - 5
    alien.y = alien.y - 3
  }

  if(keyDown(DOWN_ARROW)) {
    astronaut.y = astronaut.y + 5
    alien.y = alien.y + 3
  }


  spawnObstacles();

  drawSprites();
}

function spawnObstacles(){
  var rand = random (0,displayHeight);
if (frameCount %60 === 0) {
  obstacle1 = createSprite(displayWidth + 10, rand, 20,20);
  obstacle1.velocityX = -5;
  obstacle1.lifetime = displayWidth/5;

}

//obstacle2 = createSprite(displayWidth + 10, rand, 20,20);
//var randImg = Math.round(random(1,5));


}