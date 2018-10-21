var boundaryTouched = false;

window.onload = function() {
	
    boundaries = document.querySelectorAll(".boundary");
    endIcon = document.getElementById("end");
    startIcon = document.getElementById("start");
    statusText = document.getElementById("status")

    endIcon.onmouseover = checkWin;
    start.onclick = restartMaze;

    for (var i = 0; i < boundaries.length - 1; i++) { 
		boundaries[i].onmouseover = touchedBoundary;
	};
}


function touchedBoundary(){
    boundaryTouched = true;
    for (var i = 0; i < boundaries.length - 1; i++) { 
		boundaries[i].classList.add("youlose");
    };
    statusText.textContent = "You Lose!";
}

function checkWin(){
    if(!boundaryTouched){
        statusText.textContent = "You Win!";
    };
}

function restartMaze(){
    if(boundaryTouched){
        for (var i = 0; i < boundaries.length - 1; i++) { 
            boundaries[i].classList.remove("youlose");
        };
        boundaryTouched = false;
    }
    statusText.textContent = "Move your mouse over the 'S' to begin.";
}