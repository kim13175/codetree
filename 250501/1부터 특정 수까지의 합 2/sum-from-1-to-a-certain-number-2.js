const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.
const totalSum = (num) => {
    if (num === 1) return 1;
    return totalSum(num - 1) + num; 
}

console.log(totalSum(n));