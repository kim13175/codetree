const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
const allString = input[0];
const searchCh = input[1];

const searchChar = (string, ch) => {
    for (let i = 0; i < string.length; i++) {
        if (string.slice(i, i + 1) === ch) return i;
    }
    return 'No';
}

console.log(searchChar(allString, searchCh));
