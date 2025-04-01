const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const stringLen = input[1];

let storeStr = ''
for (let i = 0; i < stringLen; i++) {
    let originalString = input[0];
    storeStr += originalString[originalString.length - 1 - i];
}

console.log(storeStr);
