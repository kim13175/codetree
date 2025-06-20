const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
const specialNumArray = (arr, t) => {
    let cnt = 1;
    let max_cnt = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > t && arr[i] > t && arr[i] > arr[i - 1]) { 
            cnt += 1; 
        } else {
            max_cnt = Math.max(cnt, max_cnt);
            cnt = 1;
        }
    }
    return max_cnt;
}

console.log(specialNumArray(arr, t));