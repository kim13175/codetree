const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str1 = input[0];
const str2 = input[1];

// Please Write your code here.
const cmp = (str1, str2) => {
    if (str1 === str2) {
        return 'Yes';
    } else {
        return 'No';
    };
}

const makeSentence = (str1, str2) => {
    let temp = '';
    let result = '';
    for (let i = 0; i < str2.length; i++) {
        temp = '';
        for (let j = i; j < str2.length; j++) {
            temp += str2[j];
        }
        temp += str2.slice(0, i);
        
        result = cmp (str1, temp);
        if (result === 'Yes') return result;
    }
    return result;
}

console.log(makeSentence(str1, str2));