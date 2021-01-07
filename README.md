# p5.play-boilerplate
Boiler plate for p5.play
# 		Game Design Elements 

- Character
  - Astronaut
- PC 
  - Astronaut
  - Playing Character
- NPC
  - Alien
  - Non-Playing Character

- Goals
  - Collect all of the items on the way to earth
  - do not let the alien catch you on your way to earth
- Making the game adaptive
  - increasing the aliens speed if you run into obstacles
  - the more objects you collect the more your speed increases
  - the more the levels increase the more things you have to collect
- Rules
  - you can only jump up and down
  - you can't control the speed of the astronaut
  - If you miss collecting an object then you start over
  - if you get caught by the ailen then game over
- Balance
  - speed increasing for astronaut and the speed increasing for the alien
  - once you hit an obstacle you lose your speed and go back to original speed and alien becomes faster
- Chance vs. Skills
  - objects and obstacles appear randomly
  - Skills- being able to doge obstacles and escape from the alien
- Gives immeadiate feedback to the player
  - once anstronaut runs into obstacle it makes a sound effect letting us know that it is slowing down 
  - if astronaut doesn't collect an object then we will be able to see it teleporting back to original starting point
  - if astronaut collects object then there will be a sound affect letting us know that the speed in going to increase
  - when the alien catches the astronaut their will be a sound affect and "game over" will be displayed on the screen
- Story
  - the astronaut crash landed on a planet and is now trying to escape the alien which might kill him. 





# 				Steps to create the Game



* Create sprites
  * Astronaut
  * Alien

- Give Sprites an Image

* Create background
  * Space
* Make Astronaut jump
* Make the background move
* Make the obstacles
* Make the objects
* Make the astronaut able to collect the objects
* if we collect the object increase background speed
* if the astronaut touches the obstacles make the x position of the alien closer to the astronaut and reset the background speed to original speed
* Make checkpoint (different backgrounds)
* if you miss collecting an object it changes to the previous background

