var boundaryTouched = false;
var win = false;
var boundaries;
var endIcon;
var startIcon;
var statusText;
var maze;

window.onload = function() {

    boundaries = document.querySelectorAll(".boundary");
    endIcon = document.getElementById("end");
    startIcon = document.getElementById("start");
    statusText = document.getElementById("status");
    maze = document.getElementById("maze");

    endIcon.onmouseover = checkWin;
    start.onmouseover = noCheat;
    start.onclick = restartMaze;

    for (var i = 0; i < boundaries.length - 1; i++) { 
		boundaries[i].onmouseover = touchedBoundary;
	};
}


function touchedBoundary(){
    if(!win){
        boundaryTouched = true;
        for (var i = 0; i < boundaries.length - 1; i++) { 
		    boundaries[i].classList.add("youlose");
        };
        statusText.textContent = "You Lose!";
    }
}

function checkWin(){
    if(!boundaryTouched){
        statusText.textContent = "You Win!";
        win = true;
    };
}

function restartMaze(){
    win = false;
    if(boundaryTouched){
        for (var i = 0; i < boundaries.length - 1; i++) { 
            boundaries[i].classList.remove("youlose");
        };
        boundaryTouched = false;
    }
    statusText.textContent = "Move your mouse over the 'S' to begin.";
}

function noCheat(){
    maze.onmouseleave = touchedBoundary;  
}