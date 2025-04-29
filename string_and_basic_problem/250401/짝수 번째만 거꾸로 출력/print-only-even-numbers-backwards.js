const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const checkEven = (index) => {
    if (index % 2 === 0) return true;
}

let charStore = '';
for (let i = input.length - 1; i > 0; i--) {
    if (checkEven(i - 1)) charStore += input[i]; 
}

console.log(charStore);