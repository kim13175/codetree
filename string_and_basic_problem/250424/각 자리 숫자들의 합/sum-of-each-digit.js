const fs = require('fs');
const numArr = fs.readFileSync(0).toString().trim().split('');

let sum = 0;
for (let i = 0; i < numArr.length; i++) {
    sum += Number(numArr[i]);
}

console.log(sum);