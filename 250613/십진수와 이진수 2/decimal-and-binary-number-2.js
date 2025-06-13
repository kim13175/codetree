const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0].split('').map(Number);

// Please Write your code here. 
const binaryToDigit = (array) => {
    let num = 0;
    for (let i = 0; i < array.length; i++) {
        num = num * 2 + array[i];
    };
    return num;
}

const digitToBinary = (num) => {
    let binaryArray = [];
    while(true) {
        if (num < 2) {
            binaryArray.push(num);
            break;
        }
        binaryArray.push(num % 2);
        num = parseInt(num / 2, 10);
    }
    return binaryArray.reverse().join('');
}
const newNumber = 17 * binaryToDigit(binaryInput);
console.log(digitToBinary(newNumber));