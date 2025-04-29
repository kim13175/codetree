const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
// Please Write your code here.
const formatNumber = (numA, numB) => {
    if (numA < numB) {
        numB *= 2;
        numA += 10;
    } else {
        numA *= 2;
        numB += 10;
    }

    return [numA, numB];
}

console.log(formatNumber(a, b).join(' '));
