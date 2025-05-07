const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.
const multipleCalc = (numA, numB, numC) => {
    return numA * numB * numC;
}

const splitNumber = (num) => {
    if (num === 0) return num % 10;
    return splitNumber(parseInt(num / 10)) + (num % 10);
}

console.log(splitNumber(multipleCalc(a, b, c)));