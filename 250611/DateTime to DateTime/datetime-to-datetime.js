const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.
const prevTime = (day, hour, min) => {
    if (day === 11) {
        if (hour < 11) return true;
        if (hour === 11 && min < 11) return true;
    }
    return false;
}

const calcMinutes = (day, hour, min) => {
    const point = 11;
    if (prevTime(day, hour, min) === true) return -1
    
    const startTime = (point * 24 * 60) + (point * 60) + point; 
    const endTime = (day * 24 * 60) + (hour * 60) + min;

    return endTime - startTime;
}

console.log(calcMinutes(A, B, C));