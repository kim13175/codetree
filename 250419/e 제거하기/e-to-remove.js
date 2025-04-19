const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let newString = '';
for (let i = 0; i < input.length; i++) {
    if (input[i] === 'e') {
        newString = input.slice(0, i) + input.slice(i+1, input.length);
        break;
    }   
}

console.log(newString);
