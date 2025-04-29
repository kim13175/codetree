const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const firstCh = input[0];
const secondCh = input[1];

let newString = '';
for (let i = 0; i < input.length; i++) {
    if (input[i] === firstCh) newString += secondCh;
    else if (input[i] === secondCh) newString += firstCh;
    else newString += input[i];
}

console.log(newString);