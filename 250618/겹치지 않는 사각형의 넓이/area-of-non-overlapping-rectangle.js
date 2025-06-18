const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);
const offset = 1000;
const arrayLength = 2 * offset + 1;
let location = Array(arrayLength).fill(Number(0)).map((array) => Array(arrayLength).fill(Number(0)))
// Please Write your code here.
const fillRect = (loc) => {
    const [x1, y1, x2, y2] = loc;

    for (let i = x1 + offset; i < x2 + offset; i++) {
        for (let  j = y1 + offset; j < y2 + offset; j++) {
            location[i][j] += 1;
        }
    }
}

const removeArea = (loc) => {
    const [x1, y1, x2, y2] = loc;

    for (let i = x1 + offset; i < x2 + offset; i++) {
        for (let j = y1 + offset; j < y2 + offset; j++) {
            location[i][j] -= 1;
        }
    }
}

const remainArea = (loc1, loc2) => {
    let cnt = 0;

    const [x1, y1, x2, y2] = loc1;
    const [x3, y3, x4, y4] = loc2;

    const minX = Math.min(x1, x2, x3, x4);
    const maxX = Math.max(x1, x2, x3, x4);
    const minY = Math.min(y1, y2, y3, y4);
    const maxY = Math.max(y1, y2, y3, y4);

    for (let i = offset + minX; i < offset + maxX; i++) {
        for (let j = offset + minY; j < offset + maxY; j++) {
            if (location[i][j] === 1) cnt += 1;
        }
    }

    return cnt;
}

fillRect(rectA);
fillRect(rectB);
removeArea(rectM);

console.log(remainArea(rectA, rectB));

