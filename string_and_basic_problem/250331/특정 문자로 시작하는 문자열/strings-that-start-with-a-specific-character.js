const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const stringCount = Number(input[0]);
let count = 0;
let lengthCount = 0;

let stringArr = new Array(stringCount);
stringArr = input.slice(1, 1 + stringCount);

const alphabet = input[1 + stringCount];
const checkAlphabet = (str) => {
    if (str[0] === alphabet) {
        count += 1;
        lengthCount += str.length;
    }
}

const checkAvgLen = () => {
    return (lengthCount / count).toFixed(2);     
}

for (let i = 0; i < stringCount; i++) {
    checkAlphabet(stringArr[i]);
}

console.log(count, checkAvgLen());