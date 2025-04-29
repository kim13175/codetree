function checkNumber(numA, numB) {
    let cnt = 0;
    for (i = numA; i <= numB; i++) {
        if (isIntactNumber(i) === true) cnt += 1;
    }
    return cnt;
}

function isIntactNumber(num) {
    if (num % 2 !== 0 && isSplitJudge(num) && !num.toString().endsWith('5')) return true;
}

function isSplitJudge(num) {
    if (num % 3 === 0 && num % 9 !== 0) return false;
    return true;
}

const fs = require('fs');
let [numA, numB] = fs.readFileSync(0).toString().trim().split(" ");
process.stdout.write(checkNumber(numA, numB).toString());