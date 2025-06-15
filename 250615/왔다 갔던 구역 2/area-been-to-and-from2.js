const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);
const offset = 1000;
const report = new Array(2 * offset + 1).fill(0).map(Number);

// Please Write your code here.
const recordLocation = (commands) => {
    let location = [];
    let point = 0;
    for (let i = 0; i < commands.length; i++) {
        let [move, cmd] = input[i + 1].split(' ');
        move = Number(move);

        let start = 0, end = 0;
        if (cmd === 'L') {
            start = point - move;
            end = point;
            point -= move;
        } else {
            start = point;
            end = point + move;
            point += move;
        }

        location.push([start, end]);
    }
    return location;
}

const specialRegion = (location) => {
    let count = 0;
    for (const cnt of report) {
        if (cnt >= 2) count += 1; 
    }
    return count;
}

let location = recordLocation(commands);

location.forEach((loc) => {
    let [x1, x2] = loc;

    x1 += offset;
    x2 += offset;

    for (let i = x1; i < x2; i++) report[i] += 1;
});

console.log(specialRegion(...location));