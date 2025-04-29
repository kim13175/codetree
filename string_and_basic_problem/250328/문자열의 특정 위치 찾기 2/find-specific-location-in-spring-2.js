const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const stringArr = ['apple', 'banana', 'grape', 'blueberry', 'orange'];
let count = 0;

const solve = (ch, string) => {
    for (let i= 0; i < string.length; i++) {
        if (specialIndex(i)) {
            if (equalChar(ch, string[i])) {
                console.log(string);
                count += 1;
            }
        }
    }
}

const specialIndex = (index) => {
    if (index === 2 || index === 3) return true;
}

const equalChar = (ch, stringCh) => {
    if (ch === stringCh) return true;
}

for (let i = 0; i < stringArr.length; i++) {
    solve(input, stringArr[i]);
}

console.log(count);

