const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const totalString = input[0];
let count = 0;
for (let i = 0; i < totalString.length - input[1].length + 1; i++) {
    let partialString = '';
    for (let j = i; j < i + input[1].length; j++) {
        partialString += totalString[j];
    }
    if (partialString === input[1]) count += 1;
}

console.log(count);