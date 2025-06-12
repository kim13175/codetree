const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.
const partialNumSquare = (num) => {
    if (num < 10) return num**2;
    return partialNumSquare(parseInt(num / 10)) + (num % 10)**2;
}

console.log(partialNumSquare(n));