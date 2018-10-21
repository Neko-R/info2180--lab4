//Lab 4 - Neko Reid (620100200)

//declare/create variables
var boundaryTouched = false;
var win = false;
var boundaries;
var endIcon;
var startIcon;
var statusText;
var maze;

window.onload = function() {
    //initialize variables
    boundaries = document.querySelectorAll(".boundary");
    endIcon = document.getElementById("end");
    startIcon = document.getElementById("start");
    statusText = document.getElementById("status");
    maze = document.getElementById("maze");

    //add event handlers
    endIcon.onmouseover = checkWin;
    start.onmouseover = noCheat;
    start.onclick = restartMaze;

    for (var i = 0; i < boundaries.length - 1; i++) { 
		boundaries[i].onmouseover = touchedBoundary;
	};
}

//walls of the maze turn red when the mouse enters any one of them
function touchedBoundary(){
    if(!win){
        boundaryTouched = true;
        for (var i = 0; i < boundaries.length - 1; i++) { 
		    boundaries[i].classList.add("youlose"); //turn walls red
        };
        statusText.innerHTML = "You Lose! \nClick 'S' if you want to restart.";
    }
}

//user reaches the end of the maze show "You Win!"
function checkWin(){
    if(!boundaryTouched){ //if walls are not red
        statusText.textContent = "You Win! \nClick 'S' if you want to restart.";
        win = true;
    };
}

//restart maze when S icon/button is clicked
function restartMaze(){
    win = false;
    if(boundaryTouched){ //if walls are red
        for (var i = 0; i < boundaries.length - 1; i++) { 
            boundaries[i].classList.remove("youlose"); //remove red from walls
        };
        boundaryTouched = false;
    }
    statusText.textContent = "Move your mouse over the 'S' to begin.";
}

//when hover over S icon/button, prevent cheating but making sure that when mouse leaves maze element the walls turn red
function noCheat(){
    maze.onmouseleave = touchedBoundary;  
}
