const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
// Please Write your code here.
const specialRecur = (num) => {
    if (num === 1) {
        return 1;
    } else if (num === 2) {
        return 2;
    }
    return specialRecur(parseInt(num / 3)) + specialRecur(num - 1);
}

console.log(specialRecur(n));