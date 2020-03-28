var isPurple = false;

document.getElementById("b").addEventListener("click", function() {
	if (isPurple) {
		document.getElementById("d").style.background = "white";
		isPurple = false;
	}
	else {
		document.getElementById("d").style.background = "purple";
		isPurple = true;	
	}
})