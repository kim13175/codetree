const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const changedown = (ch) => {
    if (ch <= 'Z' && 'A' <= ch) return String.fromCharCode(ch.charCodeAt() + 32)
    if (ch <= 'z' && 'a' <= ch) return ch;
}

const checkNumber = (ch) => {
    if (ch >= '0' && ch <= '9') return true;
}

const filterString = (str) => {
    let newString = '';
    for (let i = 0; i < str.length; i++) {
        if ((str[i] <= 'z' && str[i] >= 'a') || (str[i] <= 'Z' && str[i] >= 'A')) newString += changedown(str[i]);
        if (checkNumber(str[i])) newString += str[i]; 
    }
    return newString;
}

console.log(filterString(input));