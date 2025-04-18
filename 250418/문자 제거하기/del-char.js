const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let newString = input[0];
for (let i = 1; i < input.length; i++) {
    let num = input[i];
    let newStringLen = newString.length;

    if (num >= newString.length) {
        newString = newString.slice(0, newStringLen - 1)
        console.log(newString);
    } else {
        newString = newString.slice(0, num) + newString.slice(Number(num) + 1, newStringLen);
        console.log(newString);
    }
}