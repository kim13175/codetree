const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const rectangles = [];
const offset = 100;
const locationLength = 2 * offset + 1;
let location = Array(locationLength).fill(Number(0)).map(() => Array(locationLength).fill(Number(0)));

for (let i = 1; i <= n; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    rectangles.push([x1, y1, x2, y2]);
}

// Please Write your code here.
const fillArea = (loc, color) => {
    let [x1, y1, x2, y2] = loc;

    x1 += offset;
    y1 += offset;
    x2 += offset;
    y2 += offset;

    for (let i = x1; i < x2; i++) {
        for (let j = y1; j < y2; j++) {
            color === 'red' ? location[i][j] = 0 : location[i][j] = 1
        }
    }
}

const checkArea = () => {
    let cnt = 0;
    for (let i = 0; i < locationLength; i++) {
        for (let j = 0; j < locationLength; j++) {
            if (location[i][j] === 1) cnt += 1;
        }
    }
    return cnt;
};

for (let i = 0; i < rectangles.length; i++) {
    if (i % 2 === 0) {
        fillArea(rectangles[i], 'red');
    } else {
        fillArea(rectangles[i], 'blue');
    }
}

console.log(checkArea());
