const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const changeUpper = (ch) => {
    if ('a' <= ch && 'z' >= ch) return String.fromCharCode(ch.charCodeAt() - 32);
    return ch;
}

const filterAlphabet = (str) => {
    let newString = '' 
    for (let i = 0; i < str.length; i++) {
        if (('A' <= str[i] && str[i] <= 'Z') || ('a' <= str[i] && str[i] <= 'z')) newString += changeUpper(str[i]); 
    }
    return newString;
}

console.log(filterAlphabet(input));