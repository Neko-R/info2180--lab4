var boundaryTouched = false;

window.onload = function() {
	
    boundaries = document.querySelectorAll(".boundary");
    endIcon = document.getElementById("end");
    startIcon = document.getElementById("start");

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
}

function checkWin(){
    if(!boundaryTouched){
        alert("You win!");
    };
}

function restartMaze(){
    if(boundaryTouched){
        for (var i = 0; i < boundaries.length - 1; i++) { 
            boundaries[i].classList.remove("youlose");
        };
        boundaryTouched = false;
    }
}