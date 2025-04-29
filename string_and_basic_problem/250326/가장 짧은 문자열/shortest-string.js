const fs = require('fs');
const [str1, str2, str3] = fs.readFileSync(0).toString().trim().split('\n');

const stringLen = [str1.length, str2.length, str3.length];

let memoMaxLen = stringLen[0];
let memoMinLen = stringLen[0];
for (let i = 1; i < stringLen.length; i++) {
    if (memoMaxLen < stringLen[i]) {
        memoMaxLen = stringLen[i];
    }
    if (memoMinLen > stringLen[i]) {
        memoMinLen = stringLen[i];
    }
}

console.log(memoMaxLen - memoMinLen);
