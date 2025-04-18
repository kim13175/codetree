const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('');

const firstCh = input[0];
const secondCh = input[1];

for (let i = 0; i < input.length; i++) {
    if (input[i] === secondCh) input[i] = firstCh;
}

console.log(input.join(''));