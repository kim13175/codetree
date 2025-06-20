const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);
// Please Write your code here.
const ascNumberArray = (arr) => {
    let cnt = 1;
    let max_cnt = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) cnt += 1;
        else cnt = 1;
        max_cnt = Math.max(cnt, max_cnt);
    }
    return max_cnt;
} 

console.log(ascNumberArray(arr));