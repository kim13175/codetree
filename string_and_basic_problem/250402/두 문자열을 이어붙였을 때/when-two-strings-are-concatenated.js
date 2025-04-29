const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');


const compareString = (arr) => {
    const sequenceString = arr.join('');
    const reverseString = arr.reverse().join('');

    if (sequenceString === reverseString) return true;
    return false;
}

console.log(compareString(input));