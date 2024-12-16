function checkInPartialSame(a, b, len_A, len_B) {
    for (let i = 0; i < len_A; i++) {
        if (a[i] === b[0]) {
            for (let j = 0; j < len_B; j++) {
                if (a[i+j] === b[j]) {
                    continue;
                }
                return "No";
            }
        }
    }
    return "Yes";
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

let [len_A, len_B] = input[0].split(" ");
let numArr_A = input[1];
let numArr_B = input[2];

console.log(checkInPartialSame(numArr_A, numArr_B, len_A, len_B));   