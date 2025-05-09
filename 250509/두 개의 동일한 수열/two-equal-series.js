const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const a = input[1].trim().split(' ').map(Number);
const b = input[2].trim().split(' ').map(Number);

// Please Write your code here.
const sortingArr = (arr) => {
    let newArr = new Array(arr.length);
    newArr = arr.sort((prev, cur) => {
        return prev - cur;
    });
    return newArr;    
}

const checkSame = (arr1, arr2) => {
    if (arr1 === arr2) console.log('Yes');
    else {
        console.log('No');
    }
}

checkSame(sortingArr(a).join(''), sortingArr(b).join(''));