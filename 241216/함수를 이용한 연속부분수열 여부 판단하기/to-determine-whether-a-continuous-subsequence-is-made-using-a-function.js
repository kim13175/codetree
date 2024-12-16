function isSameNumber(n) {
    for (let i = 0; i < len_B; i++) {
        if (numArr_A[i+n] !== numArr_B[i]) return false;
    }
}

function isSubSequence() {
    /* 전체 수열 크기 - 부분 수열 크기 = 확인해야 될 요소  */
    for (let i = 0; i < len_A - len_B + 1; i++) {
        if (isSameNumber(i)) {
            return true;
        }
    }
}

function printAnswer() {
    if (isSubSequence) {
        return "Yes";
    }
    return "No";
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

let [len_A, len_B] = input[0].split(" ");
let numArr_A = input[1];
let numArr_B = input[2];
console.log(printAnswer());   