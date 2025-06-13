const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, b] = input[0].split(' ').map(Number);

// Please Write your code here.
const changeBase = (n, b) => {
    let baseArray = [];
    while(true) {
        if (n < b) {
            baseArray.push(n);
            break;
        }
        baseArray.push(n % b);
        n = parseInt(n / b, 10);
    }
    return baseArray;
}

console.log(changeBase(n, b).reverse().join(''));