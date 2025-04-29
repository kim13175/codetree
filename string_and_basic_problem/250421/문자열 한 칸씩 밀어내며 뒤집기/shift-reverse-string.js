const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [string, order] = input[0].split(' ');
let solveString = string;

const solveFirst = (string) => {
    return string.slice(1, string.length) + string.slice(0, 1);
}

const solveSecond = (string) => {
    return string.slice(string.length - 1, string.length) + string.slice(0, string.length - 1)
}

const solveThird = (string) => {
    return string.split('').reverse().join('');
}

const solve = (method, string) => {
    switch (method) {
        case '1':
            solveString = solveFirst(string)
            return solveString;
        case '2':
            solveString = solveSecond(string);
            return solveString;
        case '3':
            solveString = solveThird(string);
            return solveString;
        default:
            return;
    }
}

for (let i = 0; i < order; i++) {
    console.log(solve(input[i + 1], solveString));
}