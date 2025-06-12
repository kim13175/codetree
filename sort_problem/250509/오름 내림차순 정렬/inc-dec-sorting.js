const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const nums = input[1].split(' ').map(Number);

// Please Write your code here.
const desc = nums.sort((prev, cur) => {
    return prev - cur;
}).join(' ');

const asc = nums.sort((prev, cur) => {
    return cur - prev;
}).join(' ');

console.log(desc);
console.log(asc);