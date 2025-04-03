const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const searchKeyword = ['ee', 'eb'];
let countArr = [];

const countKeywordToString = (string, keyword) => {
    let count = 0;

    for (let i = 0; i < string.length - 1; i++) {
        if (string.slice(i, i + 2) === keyword) count += 1;
    }

    return count;
}

const solveCountArr = () => {
    let arr = [];
    for (let i = 0; i < searchKeyword.length; i++) {
        arr[i] = countKeywordToString(input, searchKeyword[i]);
    }
    return arr;
}

console.log(solveCountArr().join(' '));