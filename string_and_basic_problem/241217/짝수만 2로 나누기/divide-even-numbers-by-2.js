function evenDivide(num) {
    if (num % 2 === 0) {
        num = num / 2;
    }
    return num;
}

function printArr() {
    for (let number of numArr) {
        number = evenDivide(number);
        process.stdout.write(String(number) + " ");
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let length = input[0];
let numArr = input[1].split(" ");
printArr();