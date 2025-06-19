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
    let remainGlass = false;
    let min_x = mapLength, max_x = 0, min_y = mapLength, max_y = 0;
    for (let i = 0; i < mapLength; i++) {
        for (let j = 0; j < mapLength; j++) {
            if (ground[i][j] === 1) {
                remainGlass = true;
                min_x = Math.min(min_x, i);
                max_x = Math.max(max_x, i);
                min_y = Math.min(min_y, j);
                max_y = Math.max(max_y, j);
            } 
        }
    }

    return [((max_x - min_x + 1) * (max_y - min_y + 1)), remainGlass];
}

fillRect(rect1);
removeRect(rect2);
const [rectArea, remaining] = checkGround(ground)
console.log(remaining ? rectArea : 0);