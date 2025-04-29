const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let count = 0;
let lengthCount = 0;

const findA = (str) => {
    if (str[0] === 'a') {
      count += 1;
    }
} 

for (let i = 1; i < input.length; i++) {
    findA(input[i]);
    lengthCount += input[i].length;
}

console.log(lengthCount + ' ' + count);