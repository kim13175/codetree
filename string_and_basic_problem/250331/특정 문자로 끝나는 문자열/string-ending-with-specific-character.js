const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const alphabet = input[input.length - 1];

let count = 0;
const checkAlphabet = (str) => {
    if (str[str.length - 1] === alphabet) {
        count += 1;
        console.log(str);
    }
}

for (let i = 0; i < input.length - 1; i++) {
    checkAlphabet(input[i]);
}

if (count === 0) console.log('None');