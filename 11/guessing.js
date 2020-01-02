var myNumber = 32;
var alreadyCorrect = false;

while (!alreadyCorrect) {
    var guess = Number(prompt("I have a number in my mind.\nGuess what it is!\nYour guess:"));

    if (isNaN(guess)) {
        alert("You call that a number? Guess a NUMBER please!")
    }
    else {
        if (guess < myNumber) {
            alert("Too small! Make another guess!");
        }
        else if (guess > myNumber) {
            alert("Too large! Make another guess!");
        }
        else {
            alert("Congratulations! You got it right!");
            alreadyCorrect = true;
        }
    }
}