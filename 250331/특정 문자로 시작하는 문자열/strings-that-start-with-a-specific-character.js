const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const stringCount = input[0];
let count = 0;

let stringArr = new Array(Number(stringCount));
stringArr = input.slice(1, input.length - 1);

const checkAlphabet = (str) => {
    const alphabet = input[input.length - 1];

    if (str[0] === alphabet) {
        count += 1;
    }
}

const checkAvgLen = (stringArr) => {
    let lengthCount = 0;

    for (let i = 0; i < stringArr.length; i++) {
        lengthCount += stringArr[i].length;
    }

    const avg = Math.round((lengthCount / stringCount), 2);
    return avg;
}

for (let i = 0; i < stringCount; i++) {
    checkAlphabet(stringArr[i]);
}

console.log(count, checkAvgLen(stringArr).toFixed(2));