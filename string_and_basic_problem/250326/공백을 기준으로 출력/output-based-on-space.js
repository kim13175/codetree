const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let newString = '';
for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') continue;
    if (input[i] === '\n') continue;
    newString += input[i];
}

console.log(newString);