const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.
const untilOne = (num) => {
    if (num === 1) return 0;
    if (num % 2 === 0) {
        return untilOne(parseInt(num / 2)) + 1;
    } else {
        return untilOne(parseInt(num / 3)) + 1;
    }
}

console.log(untilOne(n));