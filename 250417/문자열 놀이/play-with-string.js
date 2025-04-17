const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [str, num] = input[0].trim().split(' ');

const firstMethod = (str, index1, index2) => {
    newString = '';
    let strArr = str.split('');
    for (let i = 0; i < str.length; i++) {
        if (i + 1 === Number(index1)) newString += strArr[index2 - 1];
        else if (i + 1 === Number(index2)) newString += strArr[index1 - 1];
        else newString += str[i];
    }
    return newString;
}

const secondMethod = (str, ch1, ch2) => {
    newString = '';
    for (let i = 0; i < str.length; i++) {
        if (ch1 === str[i]) newString += ch2;
        else newString += str[i];
    }
    return newString;
}

let tempString = str;
for (let i = 0; i < num; i++) {
    const [method, args1, args2] = input[i + 1].split(' ');
    if (Number(method) === 1) {
        tempString = firstMethod(tempString, args1, args2);
        console.log(tempString);
    } else if (Number(method) === 2) {
        tempString = secondMethod(tempString, args1, args2);
        console.log(tempString);
    };    
}


