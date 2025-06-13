const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1].split('').map(Number);

// Please Write your code here.
const toDec = (num, base) => {
    let number = 0;
    for (let i = 0; i < num.length; i++) number = number * base + num[i];
    return number; 
}

const toBase = (num, base) => {
    let baseArray = [];
    while(true) {
        if (num < base) {
            baseArray.push(num);
            break;
        }
        baseArray.push(num % base);
        num = parseInt(num / base, 10);
    }
    return baseArray.reverse().join('');
}

const decNumber = toDec(n, a);
const baseNumber = toBase(decNumber, b);
console.log(baseNumber);