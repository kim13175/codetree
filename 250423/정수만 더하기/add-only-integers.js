const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let totalSum = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i] <= '9' && '0' <= input[i]) totalSum += Number(input[i]);
}

console.log(totalSum);