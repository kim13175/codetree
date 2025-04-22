const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const changeCh = (ch) => {
    if (ch === 'a') return 'z';

    let newAsciiNum = ch.charCodeAt() - 1;
    return String.fromCharCode(newAsciiNum); 
}

console.log(changeCh(input));