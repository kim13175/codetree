const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let count = 0;
for (let i = 0; i < input[0].length; i++) {
    if (input[0][i] === input[1]) count += 1;
}

console.log(count);

