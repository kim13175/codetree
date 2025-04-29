const fs = require('fs');
const [num1, num2] = fs.readFileSync(0).toString().trim().split(' ');

let numA = num1 + num2;
let numB = num2 + num1;

console.log(Number(numA) + Number(numB));

