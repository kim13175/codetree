const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryArray = input[0].split('').map(Number);

// Please Write your code here.
const digitToDec = (digitArray) => {
    let num = 0;
    for (let i = 0; i < digitArray.length; i++) num = num * 2 + digitArray[i];
    return num;
}

console.log(digitToDec(binaryArray));