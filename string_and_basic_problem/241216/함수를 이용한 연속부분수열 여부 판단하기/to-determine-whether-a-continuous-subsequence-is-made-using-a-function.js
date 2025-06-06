function isSameNumber(index) {
    for (let i = 0; i < len_B; i++) {
        if (numArr_A[i+index] !== numArr_B[i]) return false;
    }
    return true;
}

function isSubSequence() {
    /* 전체 수열 크기 - 부분 수열 크기 = 확인해야 될 요소  */
    for (let i = 0; i < len_A - len_B + 1; i++) {
        if (isSameNumber(i)) {
            return true;
        }
    }
    return false;
}

function printAnswer() {
    if (isSubSequence()) {
        return "Yes";
    }
    else {
        return "No";
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

let [len_A, len_B] = input[0].split(" ").map(Number);
let numArr_A = input[1].split(" ").map(Number);
let numArr_B = input[2].split(" ").map(Number);
console.log(printAnswer());   