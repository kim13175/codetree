const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const stringCount = input[0];
let count = 0;
let lengthCount = 0;

let stringArr = new Array(Number(stringCount));
stringArr = input.slice(1, input.length - 1);

const checkAlphabet = (str) => {
    const alphabet = input[input.length - 1];

    if (str[0] === alphabet) {
        count += 1;
        lengthCount += str.length;
    }
}

const checkAvgLen = () => {
    return Math.round((lengthCount / count), 2).toFixed(2);     
}

for (let i = 0; i < stringCount; i++) {
    checkAlphabet(stringArr[i]);
}

console.log(count, checkAvgLen());