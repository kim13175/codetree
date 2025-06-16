const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);
const offset = 100000;
let colorStatusBoard = new Array(2 * offset + 1).fill(0).map(Number);
let current = offset;
// Please Write your code here.
const moveTile = (cmd, move) => {
    if (cmd === 'L') {
        while (move > 0) {
            colorStatusBoard[current] = 1;
            move -= 1;

            if (move) current -= 1;
        }
    } else {
        while (move > 0) {
            colorStatusBoard[current] = 2;
            move -= 1;

            if (move) current += 1;
        }
    }
}

const changeEvent = (commands) => {
    for (let i = 0; i < commands.length; i++) {
        let [move, cmd] = commands[i].split(' ');
        move = Number(move);
        moveTile(cmd, move);
    }
}

const checkTile = (board) => {
    let white = 0, black = 0;
    for (let i = 0; i < board.length; i++) {
        if (board[i] === 1) white += 1;
        if (board[i] === 2) black += 1;
    }
    return [white, black].join(' ');
}

changeEvent(commands);
console.log(checkTile(colorStatusBoard));
