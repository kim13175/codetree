const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
let count = 0;

// Please Write your code here.
const recursive = (num) => {
    if (num === 1) return count;
    count += 1;    
    if (num % 2 === 0) {
        return recursive(num / 2);
    } else {
        return recursive(3 * num + 1);
    }
}

console.log(recursive(n));