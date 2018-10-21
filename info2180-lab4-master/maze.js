var boundaryTouched = false;

window.onload = function() {
	
    boundaries = document.querySelectorAll(".boundary");
    end = document.getElementById("end");

    end.onmouseover = checkWin;

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