const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const changeCh = (ch) => {
    if (ch <= 'z' && ch >= 'a') return String.fromCharCode(ch.charCodeAt() - 32);
    else return String.fromCharCode(ch.charCodeAt() + 32);
}

let formatString = '';
for (let i = 0; i < input.length; i++) {
    formatString += changeCh(input[i]);
}

console.log(formatString);