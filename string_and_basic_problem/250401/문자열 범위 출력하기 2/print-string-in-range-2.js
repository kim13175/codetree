const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let originalString = input[0];
const stringLen = input[1];

let storeStr = ''

if (stringLen > originalString.length) {
    for (let i = 0; i < originalString.length; i++) {
        storeStr += originalString[originalString.length - 1 - i];
    }
} else {
    for (let i = 0; i < stringLen; i++) {
    storeStr += originalString[originalString.length - 1 - i];
    }
}

console.log(storeStr);
