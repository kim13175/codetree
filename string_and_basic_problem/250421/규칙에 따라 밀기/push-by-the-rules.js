const fs = require('fs');
const [string, order] = fs.readFileSync(0).toString().trim().split('\n');
let solveString = string;
let orderArr = order.split('');

const moveRight = (string) => {
    lastCh = string.length - 1;
    return string.slice(lastCh, string.length) + string.slice(0, lastCh);
}

const moveLeft = (string) => {
    return string.slice(1, string.length) + string.slice(0, 1);
}

const solveProblem = (order, string) => {
    if (order === 'L') return moveLeft(string);
    else return moveRight(string);
}

for (let i = 0; i < orderArr.length; i++) {
    solveString = solveProblem(orderArr[i], solveString);
}

console.log(solveString);