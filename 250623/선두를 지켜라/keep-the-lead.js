const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const MAX_CASE = 1000000;

const calcTime = () => {
    let time = 0;

    for (let i = 1; i < input.length; i++) { 
        const [v, t] = input[i].split(' ');
        time += Number(t);
    }

    return parseInt(time / 2, 10);
}

const MAX_TIME = calcTime();

const checkDistance = (input, start, end) => {
    let time = 1;
    let arr = Array(MAX_CASE + 1).fill(Number(0));
    for (let i = start; i <= end; i++) {
        const [v, t] = input[i].split(' ').map(Number);
        for (let j = 0; j < t; j++) {
            arr[time] = arr[time - 1] + v;
            time += 1;
        }
    }
    return arr;
}

const aStatus = checkDistance(input, 1, n);
const bStatus = checkDistance(input, n + 1, n + m);

const checkOverTaking = (a, b) => {
    let leader = 0, cnt = 0;
    for (let i = 0; i < MAX_TIME; i++) {
        if (a[i] > b[i]) {
            if (leader === 2) {
                cnt += 1;
            }
            leader = 1;
        } else if (a[i] < b[i]) {
            if (leader === 1) {
                cnt += 1; 
            }
            leader = 2;
        }
    }
    return cnt;
} 

console.log(checkOverTaking(aStatus, bStatus));