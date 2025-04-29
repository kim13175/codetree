const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const keyword = input[1];

const findLocation = (string, keyword) => {
    let index = -1;
    let len = string.length - keyword.length + 1;
    for (let i = 0; i < len; i++) {
        if (string.slice(i, i + keyword.length) === keyword) return i;
    }
    return index;
}

console.log(findLocation(input[0], keyword));
