const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];

let minLoc = 101;
let maxLoc = -101; 

for (let i = 1; i <= n; i++) {
    segments.push(input[i].trim().split(' ').map(Number));
    minLoc = Math.min(minLoc, segments[i-1][0]);
    maxLoc = Math.max(maxLoc, segments[i-1][1]);
}

const overlapLine = (segments) => {
    const line = new Array(maxLoc - minLoc + 1).fill(0).map(Number);
    for (let i = 0; i < segments.length; i++) {
        for (let j = segments[i][0]; j <= segments[i][1]; j++) line[j - 1] += 1;
    }
    return line;
}

// Please write your code here.
console.log(Math.max(...overlapLine(segments)));