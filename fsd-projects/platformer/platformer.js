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
//togglegrid()
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

   
   toggleGrid();

   createPlatform(350, 670, 20, 290);
   createPlatform(610, 580, 400, 200, "lime"); // bright green for a finished platform
   createPlatform(380, 380, 200, 60);
createPlatform(400, 550, 200, 200, "red");
createPlatform(600,560, 600, 200,"yellow")
createCollectable("steve", 600, 30);
createCollectable("diamond", 700, 170, 0.9, 0.7);
createCollectable("steve", 610, 30);
createCollectable("diamond", 600, 130, 0.5, 0.7);
createCannon("middle", 500, 1888)
  createCannon("top", 200, 2000);
createCannon("right", 300, 2000);
createCannon("top", 200, 500);
createCannon("bottom",700, 1000);

    



  

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
