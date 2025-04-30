const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.
const printSequenceNum = (num) => {
    process.stdout.write(`${num}`);
    if (n === 0) return;
    printSequenceNum(num - 1);
}

const printReverseNum = (num) => {
    process.stdout.write(`${num}`);
    if (n === num) return;
    printReverseNum(num + 1);
}

printSequenceNum(n);
printReverseNum(n);