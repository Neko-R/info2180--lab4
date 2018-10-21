

window.onload = function() {
	
    boundaries = document.querySelectorAll(".boundary");

    for (var i = 0; i < boundaries.length - 1; i++) { 
		boundaries[i].onmouseover = touchedBoundary;
	}
}


function touchedBoundary(){
    for (var i = 0; i < boundaries.length - 1; i++) { 
		boundaries[i].classList.add("youlose");
	}

}