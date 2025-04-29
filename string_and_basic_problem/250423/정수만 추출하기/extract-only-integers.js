const fs = require('fs');
const [strA, strB] = fs.readFileSync(0).toString().trim().split(' ');

const filterNum = (str) => {
    let num = 0;
    for (let i = 0; i < str.length; i++) {
        if ('0' <= str[i] && str[i] <= '9') num += str[i];
        else break;
    }
    return Number(num);
}

console.log(filterNum(strA) + filterNum(strB));