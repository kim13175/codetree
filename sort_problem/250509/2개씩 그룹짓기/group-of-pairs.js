const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

// Please Write your code here.
const findLeastMax = (arr) => {
    let leastMax = 0;
    let cmpNum = 0;
    let newArr = new Array(arr.length);
    newArr = sortingArr(arr);
    mid = parseInt((newArr.length - 1) / 2);
    for (let i = 0; i <= mid; i++) {
        cmpNum = newArr[i] + newArr[arr.length - i - 1]
        if (leastMax < cmpNum) leastMax = cmpNum;
    }
    return leastMax;
}

const sortingArr = (arr) => {
    return arr.sort((prev, cur) => {
        return prev - cur;
    });
}

console.log(findLeastMax(nums));