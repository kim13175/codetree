const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
// Please Write your code here.
const maximumNum = (num) => {
    if (num < 0) return;
    if (maximumNum(num - 1) > arr[num - 1]) return maximumNum(num - 1);
    else return arr[num - 1];
}

console.log(maximumNum(n))