const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.
const oddEven = (num) => {
    if (num <= 2) return num;
    return oddEven(num - 2) + num;
}

console.log(oddEven(n));