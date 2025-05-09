const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const nums = input[1].trim().split(' ').map(Number);

// Please Write your code here.
const pickNum = (arr, n) => {
    arr.sort((prev, cur) => {
        return prev - cur;
    });
    return arr[n - 1];
}

console.log(pickNum(nums, k));