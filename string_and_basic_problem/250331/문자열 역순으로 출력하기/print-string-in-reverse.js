const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const makeArr = (arr) => {
    const stringArr = new Array(4);

    for (let i = 0; i < stringArr.length; i++) {
        stringArr[i] = arr[i];
    }

    return stringArr;
}

const newStringArr = makeArr(input);

for (let i = newStringArr.length - 1; i >= 0; i--) {
    console.log(newStringArr[i]);
}