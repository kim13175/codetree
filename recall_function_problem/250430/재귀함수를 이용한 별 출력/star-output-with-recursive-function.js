const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.
const printStar = (num) => {
    if (num === 0) return;
    printStar(num - 1);
    for (let i = 0; i < num; i++) {
        process.stdout.write("*");
    }
    process.stdout.write('\n');
}

printStar(n);