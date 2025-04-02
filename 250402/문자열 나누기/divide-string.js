const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let stringCount = input[0];
let allString = input[1].split(' ').join('');

let splitingString = '';
for (let i = 0; i < allString.length; i++) {
    splitingString += allString[i];
    if ((i + 1) % 5 === 0) splitingString += '\n';
}
console.log(splitingString);