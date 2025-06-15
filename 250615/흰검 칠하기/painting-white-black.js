const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));
const offset = 100000;
const report = new Array(2 * offset + 1).fill(0).map(Number);

// Please Write your code here.
const recordLocation = (commands) => {  
    let location = [];
    let point = 0;
    let start = 0;
    let end = 0;
    for (let i = 0; i < commands.length; i++) {
        let [move, cmd] = input[i + 1].split(' ');
        move = parseInt(move, 10);
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
};

const checkColor = (arr) => {
    let colorArray = new Array(3).fill(0).map(Number);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 5) colorArray[2] += 1;
        else {
            if (arr[i] % 2 === 0 && arr[i] !== 0) colorArray[0] += 1;
            if (arr[i] % 2 !== 0) colorArray[1] += 1;
        }
    }
    return colorArray;
}

const location = recordLocation(commands);
location.forEach((loc) => {
    let [x1, x2] = loc;

    x1 += offset;
    x2 += offset;

    for (let i = x1; i < x2; i++) report[i] += 1;
});

let white = 0, black = 0, gray = 0;
for (let i = 0; i < report.length; i++) {
    if (report[i] >= 5) {
        gray += 1;
    } else if (report[i] % 2 === 0 && report[i] !== 0) {
        white += 1;
    } else if (report[i] % 2 !== 0) {
        black += 1;
    }
}

console.log(white, black, gray);