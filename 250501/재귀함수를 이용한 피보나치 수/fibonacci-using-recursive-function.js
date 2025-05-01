const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.
const fibo = (num) => {
    if (num <= 2) return 1;
    return fibo(num - 2) + fibo(num - 1);  
}

console.log(fibo(n));