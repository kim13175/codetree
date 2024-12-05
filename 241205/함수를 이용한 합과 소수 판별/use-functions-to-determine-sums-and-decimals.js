function isPrime(num) {
    if (num === 1) return false;
    if (num === 2) return true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function splitNumSum(num) {
    let sum = 0;
    if (num > 9) {
        let [one, ten] = num.toString().trim().split("").map(Number);
        sum += (one + ten);    
    }
    if (num < 9) sum += num;
    return sum;
}

function checkEven(sum) {
    if (sum % 2 === 0) return true;
    return false;
}

function checkNum(numA, numB) {
    let cnt = 0;
    for (let i = numA; i <= numB; i++) {
        if (isPrime(i) && checkEven(splitNumSum(i))) cnt += 1;
    }
    return cnt;
}

const fs = require('fs');
let [numA, numB] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
process.stdout.write(checkNum(numA, numB).toString());