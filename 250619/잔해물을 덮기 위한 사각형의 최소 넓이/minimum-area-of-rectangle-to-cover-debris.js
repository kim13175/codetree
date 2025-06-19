const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

const offset = 1000;
const mapLength = 2 * offset + 1;
let ground = Array(mapLength).fill(Number(0)).map(() => Array(mapLength).fill(Number(0)));

const fillRect = (rect) => {
    let [x1, y1, x2, y2] = rect;

    x1 += offset;
    x2 += offset;
    y1 += offset;
    y2 += offset;

    for (let i = x1; i < x2; i++) {
        for (let j = y1; j < y2; j++) {
            ground[i][j] += 1;
        }
    }
}

const removeRect = (rect) => {
    let [x1, y1, x2, y2] = rect;

    x1 += offset;
    x2 += offset;
    y1 += offset;
    y2 += offset;

    for (let i = x1; i < x2; i++) {
        for (let j = y1; j < y2; j++) {
            if (ground[i][j] === 1) ground[i][j] -= 1;
        }
    }
}

const checkGround = (ground) => {
    let cnt = 0;
    for (let i = 0; i < mapLength; i++) {
        for (let j = 0; j < mapLength; j++) {
            if (ground[i][j] === 1) cnt += 1; 
        }
    }
    return cnt;
}

fillRect(rect1);
console.log(checkGround(ground));