const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const defineNextCh = (ch) => {
    if (ch === 'z') {
        return 'a';
    }
    let newNum = ch.charCodeAt() + 1;
    return String.fromCharCode(newNum);
}

console.log(defineNextCh(input));