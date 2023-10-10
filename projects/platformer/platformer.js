$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    for (let i = 100; i < canvas.width; i += 100) {
      createPlatform(i, canvas.height, -1, -canvas.height);
    }
    for (let i = 100; i < canvas.height; i += 100) {
      createPlatform(canvas.width, i, -canvas.width, -1);
    }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
createPlatform(700, 602, 10, 160)
createPlatform(800, 470, 10, 50)
createPlatform(460, 470, 20, 10)
createPlatform(1100, 450, 10, 300)
createPlatform(20, 299, 10, 1)
createPlatform(1200, 535, 200, 10)
createPlatform(1100, 630, 200, 10)
createPlatform(1200, 335, 200, 10)
createPlatform(1110, 430, 200, 10)
createPlatform(1000, 200, 100, 5)
createPlatform(1399, 199, 1, 1)
createPlatform(500, 200, 20, 10)
createPlatform(400, 300, 20, 10)
createPlatform(300, 400, 20, 10)
createPlatform(250, 300, 20, 10)
createPlatform(200, 200, 20, 10)
createPlatform(800, 300, 20, 10)
createPlatform(650, 300, 20, 10)

    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
createCollectable("diamond", 1100, 700, 0, 0 )
createCollectable("diamond",20, 40, 0, 0)
createCollectable("diamond",1360, 0, 0, 0)
createCollectable("diamond", 1150, 700, 0, 0 )
createCollectable("diamond", 1200, 700, 0, 0 )
createCollectable("database", 1250, 700, 0, 0 )
createCollectable("database", 1300, 700, 0, 0 )
createCollectable("steve", 1350, 700, 0, 0 )
createCollectable("steve", 1380, 700, 0, 0 )
createCollectable("max", 1240, 675, 0, 0 )
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("top", 425, 700, 50, 50)
    createCannon("top", 450, 700, 50, 50)
    createCannon("top", 475, 700, 50, 50)
    

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
