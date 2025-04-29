const fs = require('fs');
let [totalString, partialString] = fs.readFileSync(0).toString().trim().split('\n');

const filterPartial = (string) => {
    let prevString = '';
    let newString = string;

    while (prevString !== newString) {
        prevString = newString
        let len = 0

        while(len <= newString.length - partialString.length) {
            if (isSameString(partialString, len, newString)) {
                newString = newString.slice(0, len) + newString.slice(Number(len) + Number(partialString.length));
            } else {
                len++;
            }
        }
    }
    return newString;
}

const isSameString = (str, index, newString) => {
    if (index + str.length > newString.length) return false;

    let subString = newString.slice(index, index + str.length);
    return subString === str;
}

console.log(filterPartial(totalString))