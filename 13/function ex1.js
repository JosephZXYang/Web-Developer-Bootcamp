// 1. isEven(n) decides whether a number is even or not.
function isEven(n) {
    return n % 2 === 0;
}

// 2. factorial(n) returns the numerical value n!.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

// 3. kebabToSnake(s) replaces all "-" in s with "_"
function kebabToSnake(s) {
    if (s.length === 0) {
        return s;
    }
    if (s.charAt(0) == '-') {
        return "_" + kebabToSnake(s.substring(1));
    }
    else {
        return s.charAt(0) + kebabToSnake(s.substring(1));
    }
}