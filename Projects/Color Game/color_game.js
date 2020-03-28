var numColors = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var isHard = true; // game mode is hard by default


function setUpModeButtons() {
    easyButton.addEventListener("click", function () {
        if (isHard) {
            isHard = false;
            easyButton.classList.add("modeChosen");
            hardButton.classList.remove("modeChosen");
            numColors = 3;
            reset();
        }
    });

    hardButton.addEventListener("click", function () {
        if (!isHard) {
            isHard = true;
            hardButton.classList.add("modeChosen");
            easyButton.classList.remove("modeChosen");
            numColors = 6;
            reset();
        }
    });
}
function setUpResetButton() {
    resetButton.addEventListener("click", reset);
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        // add initial colors to squares
        squares[i].style.backgroundColor = colors[i];

        // add click listeners to squares
        squares[i].addEventListener("click", squareClickListener);
    }
}

function changeColors(color) {
    // loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // change each color to match the given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}

function generateRandomColors(num) {
    // generate an empty random color array
    var colorList = [];

    // Generate `num` colors
    for (var i = 0; i < num; i++) {
        // pick a random integer between 0..255 for each color channel
        var redChannel = Math.floor(Math.random() * 256);
        var greenChannel = Math.floor(Math.random() * 256);
        var blueChannel = Math.floor(Math.random() * 256);

        // push the color to the color array
        colorList.push(`rgb(${redChannel}, ${blueChannel}, ${greenChannel})`);
    }

    return colorList;
}

function reset() {
    if (!isHard) {
        colors = generateRandomColors(numColors);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for (var i = 3; i < 6; i++) {
            squares[i].style.display = "none";
        }
        for (var i = 0; i < 3; i++) {
            squares[i].style.backgroundColor = colors[i];
        }
        pickedColor = pickColor();
        h1.style.backgroundColor = document.querySelector("body").style.backgroundColor;
        messageDisplay.textContent = "";
    }

    else {
        colors = generateRandomColors(numColors);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for (var i = 0; i < 6; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
            squares[i].addEventListener("click", squareClickListener);
        }
        pickedColor = pickColor();
        h1.style.backgroundColor = document.querySelector("body").style.backgroundColor;
        messageDisplay.textContent = "";
    }
}

function squareClickListener() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor == pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = pickedColor;
        resetButton.textContent = "PLAY AGAIN?";
    }
    else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
    }
}


// start the game
game = {}

game.init = function () {
    setUpModeButtons();
    setUpResetButton();
    setUpSquares();
    reset();
}

game.init();
