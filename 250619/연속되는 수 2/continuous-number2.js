const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

// Please Write your code here.
const checkSequence = (arr) => {
    let cnt = 1;
    let max_cnt = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) cnt += 1;
        else {
            max_cnt = Math.max(max_cnt, cnt);
            cnt = 1;
        }
    }
    return max_cnt;
}

console.log(checkSequence(arr));