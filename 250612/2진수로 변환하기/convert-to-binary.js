const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.
const calcDigitArray = (num) => {
    let digit = [];
    while (true) {
        if (num < 2) {
            digit.push(num);
            break;
        }
        digit.push(num % 2);
        num = Math.floor(num / 2);
    }
    return digit;
}

console.log(calcDigitArray(n).reverse().join(''));