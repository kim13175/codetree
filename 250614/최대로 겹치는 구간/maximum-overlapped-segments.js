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
    const lineLength = maxLoc - minLoc + 1
    const line = new Array(lineLength).fill(0).map(Number);
    for (let i = 0; i < segments.length; i++) {
        const [x1, x2] = segments[i];
        const startIndex = x1 - minLoc;
        const endIndex = x2 - minLoc - 1;
        for (let j = startIndex; j <= endIndex; j++) line[j] += 1;
    }
    return line;
}

// Please write your code here.
console.log(Math.max(...overlapLine(segments)));