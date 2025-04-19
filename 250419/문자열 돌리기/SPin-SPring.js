const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

console.log(input);
for (let i = 0; i < input.length; i++) {
    console.log(input.slice(-1 - i) + input.slice(0, -1 - i));
}