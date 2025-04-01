const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let saveStr = ''
let currentCh = '';
let count = 0;

for (let i = 0; i < input.length; i++) {
    if (i === 0 || input[i] !== input[i-1]) {
        if (i > 0) {
            saveStr += currentCh + count;
        }
        currentCh = input[i]
        count = 1;
    }
    else {
        count += 1;
    }
}

saveStr += currentCh + count;

console.log(saveStr.length + '\n' + saveStr);