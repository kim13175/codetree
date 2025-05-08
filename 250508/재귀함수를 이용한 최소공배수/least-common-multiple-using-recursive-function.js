const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
let num = 1;
// Please Write your code here.
const checkLcm = (index) => {
    if (index === -1) return num;
    for (let i = 1; i < numbers[index]; i++) {
        if (numbers[index] % i === 0) {
            num *= i;
        }
    }
    if (num % numbers[index] !== 0) num *= numbers[index]; 
    return checkLcm(index - 1);             
}
const index = n - 1;
console.log(checkLcm(index));