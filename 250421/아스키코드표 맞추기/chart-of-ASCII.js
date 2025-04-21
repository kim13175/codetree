const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

let newArr = new Array(input.length);

for (let i = 0; i < input.length; i++) {
    newArr[i] = String.fromCharCode(input[i]);
}

console.log(newArr.join(' '));

