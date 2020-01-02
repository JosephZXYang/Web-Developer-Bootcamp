// 1. Print all numbers between -10 and 19
console.log("Printing all numbers between -10 and 19");
var n = -10;

while (n <= 19) {
    console.log(n);
    n++;
}

// 2. Print all even numbers between 10 and 40
console.log("Printing all even numbers between 10 and 40");
n = 10;

if (n % 2 == 1) {
    n++;
}
while (n <= 40) {
    console.log(n);
    n = n + 2;
}

// 3. Print all odd numbers between 300 and 333
console.log("Printing all odd numbers between 300 and 333");
n = 300;

if (n % 2 == 0) {
    n++;
}

while (n <= 333) {
    console.log(n);
    n = n + 2;
}

// 4. Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("Printing all numbers divisible by 5 AND 3 between 5 and 50");
n = 5;

while (n <= 50) {
    if (n % 5 == 0 && n % 3 == 0) {
        console.log(n);
    }
    n++;
}