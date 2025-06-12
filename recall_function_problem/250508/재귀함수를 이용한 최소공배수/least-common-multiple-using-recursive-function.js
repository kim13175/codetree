const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

// Please Write your code here.
/* 최대 공약수를 구하는 유클리드 알고리즘 */
const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
}

/* 최소 공배수 구하는 알고리즘 */
const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
}

const recurLcm = (arr, index = 0) => {
    if (index === arr.length - 1) return arr[index];
    return lcm(arr[index], recurLcm(arr, index + 1));
}

console.log(recurLcm(numbers));
