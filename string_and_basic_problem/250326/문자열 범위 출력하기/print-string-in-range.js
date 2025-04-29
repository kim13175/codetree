const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();
let newString = ''

for (let i = 2; i < 10; i++){
    newString += input[i];
}

console.log(newString);