const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const stringArr = input.split('');

stringArr[1] = 'a';
stringArr[input.length - 2] = 'a';

console.log(stringArr.join(''));
