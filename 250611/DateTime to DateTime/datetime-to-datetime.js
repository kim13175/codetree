const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.
const prevTime = (hour, min) => {
    if (hour < 11) return -1;
    if (hour === 11 && min < 11) return -1;
}

const calcMinutes = (day, hour, min) => {
    const eleven = 11;
    if (day === 11) prevTime(hour, min);
    
    const startTime = (eleven * 24 * 60) + (eleven * 60) + eleven; 
    const endTime = (day * 24 * 60) + (hour * 60) + min;

    return endTime - startTime;
}

console.log(calcMinutes(A, B, C));