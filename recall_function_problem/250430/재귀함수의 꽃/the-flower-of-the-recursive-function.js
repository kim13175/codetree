const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

// Please Write your code here.
const slideMoveNum = (num) => {
    if (num === 0) return;
    
    process.stdout.write(`${num} `);
    
    slideMoveNum(num - 1);

    process.stdout.write(`${num} `);
}

slideMoveNum(n);