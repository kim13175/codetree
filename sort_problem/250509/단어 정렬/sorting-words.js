const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const words = input.slice(1, n + 1);
// Please Write your code here.
const wordSort = (arr) => {
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]); 
    }
}

wordSort(words);