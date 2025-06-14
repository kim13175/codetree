const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].trim().split(' ').map(Number));
}
const maxPoint = Math.max(...segments);
const line = new Array(200).fill(0).map(Number);

// Please write your code here.
console.log(segments);