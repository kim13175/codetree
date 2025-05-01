const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.
let count = 0;
const untilOne = (num) => {
    if (num === 1) return count;
    if (num % 2 === 0) {
        count += 1;
        return untilOne(parseInt(num / 2));
    } else {
        count += 1;
        return untilOne(parseInt(num / 3));
    }
}

console.log(untilOne(n));