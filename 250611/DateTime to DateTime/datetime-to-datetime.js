const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.
const calcMinutes = (day, hour, min) => {
    const differDay = day - 11;
    const differHour = (hour > 11) ? hour - 11 : hour - 11 + 24;
    const differMin = (min > 11) ? min - 11 : min - 11 + 60;

    if (hour < 11) differDay -= 1;
    if (min < 11) differHour -= 1;

    return (differDay * 24 * 60) + (differHour * 60) + differMin;
}

console.log(calcMinutes(A, B, C));