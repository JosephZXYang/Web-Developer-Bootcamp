var areWeThere = false;

while (!areWeThere) {
    var msg = prompt("Are we there yet?");
    if (msg === "yes" || msg === "yeah" || msg.includes("yes")) {
        areWeThere = true;
        alert("Yay, we finally made it!")
    }
}