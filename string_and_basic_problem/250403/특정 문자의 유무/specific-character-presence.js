const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const includeCh = (string, ch) => {
    for (let i = 0; i < string.length - 1; i++) {
        if (string.slice(i, i + 2) === ch) {
            return 'Yes';
        };
    }
    return 'No';    
}

const solve = () => {
    let solveArr = [];
    solveArr[0] = includeCh(input, 'ee');
    solveArr[1] = includeCh(input, 'ab');
    return solveArr.join(' ');
}

console.log(solve());