const fs = require('fs');
const [strA, strB] = fs.readFileSync(0).toString().trim().split('\n');

const filterString = (str) => {
    let num = '';
    for (let i = 0; i < str.length; i++) {
        if ('0' <= str[i] && str[i] <= '9') num += str[i];
    }
    return Number(num);
}

console.log(filterString(strA) + filterString(strB));