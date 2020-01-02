// first exercise

var age = prompt("Enter your age please:");

if (age < 18) {
    alert("Sorry, you are not old enough to enter the venue!");
}

else if (age < 21) {
    alert("You can enter, but you are not old enough to drink alcohol!");
}

else {
    alert("Come on in. You can drink. Girls couldn't wait any more!");
}

// second exercise

var age = prompt("Enter your age please:");

if (age < 0) {
    console.log("Are you still in you mom's womb?????? Enter a valid age please!")
}

else if (age == 21) {
    console.log("Happy 21st birthday!");
}

else if (age % 2 == 1) {
    console.log("Your age is odd!");
}

var count = 1;
var condition = false;
while (count * count <= age) {
    if (count * count == age) {
        condition = true;
    }
    count++;
}

if (condition) {
    console.log("perfect square!");
}