const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const offset = 100;
const arrayLength = 2 * offset + 1;
const colorPaper = Array(arrayLength).fill(Number(0)).map((p) => Array(arrayLength).fill(Number(0)));
// Please Write your code here.
const fillPaper = (rect) => {
    const [x, y] = rect;
    for (let i = offset + x; i < offset + x + 8; i++) {
        for (let j = offset + y; j < offset + y + 8; j++) {
            colorPaper[i][j] = 1;
        }
    }
}

const countArea = () => {
    let cnt = 0;
    for (let i = 0; i < arrayLength; i++) {
        for (let j = 0; j < arrayLength; j++) {
            if (colorPaper[i][j] === 1) cnt += 1;
        }
    }
    return cnt;
}

rects.forEach((rect) => fillPaper(rect));
console.log(countArea());