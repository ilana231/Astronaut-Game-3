
var astronaut, astronaut_floating
var alien, alien_ufo
var backdrop, background_moving
var backdroptwo, backdrop_moving

var obstaclesGroup,obstacle1,obstacle,obstacle2,obstacle3,obstacle4,obstacle5

var PLAY = 1;
var END = 0;
var gameState = PLAY;


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
  obstaclesGroup = new Group();
}


function draw() {
  background("#060E1D");
  
  if(gameState === PLAY){
  backdrop.velocityX = -5;
  backdroptwo.velocityX = -5; 

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

  if(astronaut.isTouching(obstaclesGroup)) {
    alien.x = alien.x + 2;
  };

}






  spawnObstacles();

  drawSprites();
}

function spawnObstacles(){
  var rand = random (0,displayHeight);
if (frameCount %60 === 0) {
  obstacle = createSprite(displayWidth + 10, rand, 20,20);
  obstacle.scale = 0.2
  obstacle.setCollider("circle",0,0,10);
  obstacle.velocityX = -5;
  obstacle.lifetime = displayWidth/5;
  var randImg = Math.round(random(1,5));

  switch (randImg) {
        
    case 1: obstacle.addImage(obstacle1);
    
      break;
    
     case 2: obstacle.addImage(obstacle2);
      break;
    
     case 3: obstacle.addImage(obstacle3);
      break;
    
     case 4: obstacle.addImage(obstacle4);
      break;
    
     case 5: obstacle.addImage(obstacle5);
      break;

      default:
        break;
       
    } 
    
    obstacle.debug = true;
    obstaclesGroup.add(obstacle);
    

}





}
