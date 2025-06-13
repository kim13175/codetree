const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// Please write your code here.
const amassBlock = (segments) => {
    const block = new Array(n).fill(0).map(Number);
    for (let i = 0; i < segments.length; i++) {
        for (let j = segments[i][0]; j <= segments[i][1]; j++) {
            block[j - 1] += 1;
        };
    }
    return block;
}

const totalBlock = amassBlock(segments);
console.log(Math.max(...totalBlock));