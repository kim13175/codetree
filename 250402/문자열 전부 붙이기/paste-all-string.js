const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
input = input.slice(1, input.length);

console.log(input.join(''));


