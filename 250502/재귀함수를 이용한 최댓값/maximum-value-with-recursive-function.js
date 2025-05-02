const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let temp = 0;
// Please Write your code here.
const maximumNum = (num) => {
    if (num === 0) return temp;
    if (temp < arr[num - 1]) temp = arr[num - 1];
    return maximumNum(num - 1);
}

console.log(maximumNum(n));