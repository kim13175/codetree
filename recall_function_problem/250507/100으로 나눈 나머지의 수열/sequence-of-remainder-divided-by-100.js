const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please Write your code here.
const recursiveLogic = (num) => {
    if (num === 1) return 2;
    if (num === 2) return 4;
    return (recursiveLogic(num - 1) * recursiveLogic(num - 2)) % 100;
}

console.log(recursiveLogic(N));