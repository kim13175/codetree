const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str1 = input[0];
const str2 = input[1];

// Please Write your code here.
const makeSentence = (str1, str2) => {
    str1 = str1.split('').sort();
    str2 = str2.split('').sort();
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) return false 
    }
    return true;
}

console.log(makeSentence(str1, str2) ? 'Yes' : 'No');