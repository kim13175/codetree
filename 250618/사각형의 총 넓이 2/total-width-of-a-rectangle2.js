const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const offset = 1000;
const locationLength = 2 * offset + 1;
let location = Array(locationLength).fill(0).map(() => Array(locationLength).fill(0));
// Please Write your code here.
const fillRect = (rect) => {
    const [x1, y1, x2, y2] = rect;

    for (let i = x1 + offset; i < x2 + offset; i++) {
        for (let j = y1 + offset; j < y2 + offset; j++) location[i][j] += 1;
    }
}

const calcRectAreas = (location) => {
    let count = 0;
    for (let i = 0; i < locationLength; i++) {
        for (let j = 0; j < locationLength; j++) {
            if (location[i][j] !== 0) count += 1;
        }
    }
    return count;
}

rects.forEach((rect) => fillRect(rect));

console.log(calcRectAreas(location));

