const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const filterAlphabet = (str) => {
    let newString = '' 
    for (let i = 0; i < str.length; i++) {
        if ('A' <= str[i] && 'z' >= str[i]) newString += changeUpper(str[i]); 
    }
    return newString;
}

const changeUpper = (ch) => {
    if ('a' <= ch && 'z' >= ch) return String.fromCharCode(ch.charCodeAt() - 32);
    return ch;
}

console.log(filterAlphabet(input));