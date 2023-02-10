function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide( a, b) {
    return a / b;
}

var i = 0;
function increment(n) {

    n++;
    return n;
}
i = increment(i);

var i = 0;
function decrement(n) {

    n--;
    return n;
}
i = decrement(i);

function makeInt (n) {
    const parsed = parseInt(n, 10);
    return parsed;
}
console.log(makeInt('n'));

function preserveDecimal(n) {
    return parseFloat(n);
}
console.log(preserveDecimal);