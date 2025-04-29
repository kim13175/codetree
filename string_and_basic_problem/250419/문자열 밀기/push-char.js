const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let newString = input.slice(1, input.length) + input.slice(0, 1);
console.log(newString);