const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
let minLoc = 101;
let maxLoc = 0;

for (let i = 1; i <= n; i++) {
  const [startLoc, endLoc] = input[i].trim().split(' ').map(Number);
  minLoc = Math.min(minLoc, startLoc);
  maxLoc = Math.max(maxLoc, endLoc);  
  segments.push([startLoc, endLoc]);
}

// Please Write your code here.
const overLapLine = (segments) => {
    let diffLine = maxLoc - minLoc + 1;
    let line = new Array(diffLine).fill(0).map(Number);
    for (let i = 0; i < segments.length; i++) {
        const [x1, x2] = segments[i];
        for (let j = x1; j <= x2; j++) line[j - minLoc] += 1;
    }
    return line;
}

console.log(Math.max(...overLapLine(segments)));