const fs = require('fs');
const [str1, str2] = fs.readFileSync(0).toString().trim().split(' ');

strArr1 = str1.split('');
strArr2 = str2.split('');

let newString = ''
for (let i = 0; i < str2.length; i++) {
    if (i < 2) newString += strArr1[i];
    else newString += strArr2[i];
}

console.log(newString);