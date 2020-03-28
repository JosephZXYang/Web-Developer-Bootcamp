var rounds = 5;
var p1_wins = 0;
var p2_wins = 0;
var gameover = false;

var p1_button = document.querySelector("#p1");
var p2_button = document.querySelector("#p2");
var reset_button = document.querySelector("#reset");
var header = document.querySelector("h1");
var input = document.querySelector("#num");
var info = document.querySelector("#info");
var confirm_button = document.querySelector("#confirm");

function p1Listener() {
	if (!gameover) {
		p1_wins ++;
		header.textContent = p1_wins + " to " + p2_wins;
		if (p1_wins >= rounds) {
			gameover = true;
		}
	}
}

function p2Listener() {
	if (!gameover) {
		p2_wins ++;
		header.textContent = p1_wins + " to " + p2_wins;
		if (p2_wins >= rounds) {
			gameover = true;
		}
	}
}

function resetListener() {
	gameover = false;
	p1_wins = 0;
	p2_wins = 0;
	header.textContent = p1_wins + " to " + p2_wins;
}

function confirmListener() {
	old_rounds = rounds;
	rounds = parseInt(input.value);
	if (rounds != old_rounds) {
		info.textContent = "Playing to: " + rounds;
		if (Math.max(p1_wins, p2_wins) < rounds) {
			gameover = false;
		}
	}
}

p1_button.addEventListener("click", p1Listener);
p2_button.addEventListener("click", p2Listener);
reset_button.addEventListener("click", resetListener);
confirm_button.addEventListener("click", confirmListener);
