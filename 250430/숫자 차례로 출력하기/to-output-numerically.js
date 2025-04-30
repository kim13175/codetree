const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.
const printSeqNum = (num) => {
    if (num === 0) return;
    printSeqNum(num - 1);
    process.stdout.write(`${num} `);
};

const printRevNum = (num) => {
    if (num === 0) return;
    process.stdout.write(`${num} `);
    printRevNum(num - 1);
};

printSeqNum(n);
process.stdout.write('\n');
printRevNum(n);
process.stdout.write('\n');