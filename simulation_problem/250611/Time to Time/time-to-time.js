const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);
// Please Write your code here.
const prevTime = [a, b];
const currentTime = [c, d];

const calcTime = (start, end) => {
    const st = start;
    let timer = 0;
    while (true) {
        if (st[0] === end[0] && st[1] === end[1]) {
            break;
        }
        timer += 1;
        st[1] += 1;
        if (Number(st[1]) === 60) {
            st[1] = 0;
            st[0] += 1;
        }
    }

    return timer;
}

console.log(calcTime(prevTime, currentTime));