function checkInPartialSame(a, b) {
    if (a.includes(b)) {
        return "Yes";
    }
    return "No"; 
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

let [len_A, len_B] = input[0].split(" ");
let numArr_A = input[1];
let numArr_B = input[2];

console.log(checkInPartialSame(numArr_A, numArr_B));   