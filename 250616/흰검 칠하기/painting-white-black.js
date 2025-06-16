const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));
const offset = 100000;
let report = new Array(2 * offset + 1).fill(0).map(Number);
let reportBlack = new Array(2 * offset + 1).fill(0).map(Number);
let reportWhite = new Array(2 * offset + 1).fill(0).map(Number);
let current = offset;

// Please Write your code here.
const commandMove = (command, move) => {

    if (command === 'L') {
        while (move > 0) {
            report[current] = 1;
            reportWhite[current] += 1;
            move -= 1;

            if (move) current -= 1;
        }
    } else {
        while (move > 0) {
            report[current] = 2;
            reportBlack[current] += 1;
            move -= 1;

            if (move) current += 1;
        }
    }
}

const recordLocation = (commands) => {  
    for (let i = 0; i < commands.length; i++) {
        let [move, cmd] = commands[i];
        move = Number(move);
        commandMove(cmd, move);
    }
};

const checkColor = () => {
    let gray = 0, black = 0, white = 0;
    for (let i = 0; i < report.length; i++) {
        if (reportBlack[i] >= 2 && reportWhite[i] >= 2) gray += 1;
        else if (report[i] === 1) white += 1;
        else if (report[i] === 2) black += 1;
    }
    return [white, black, gray];
}
recordLocation(commands);
console.log(checkColor().join(' '));