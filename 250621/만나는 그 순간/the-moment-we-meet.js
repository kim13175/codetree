const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
const MAX_T = 1000000;
let posA = Array(MAX_T).fill(Number(0));
let posB = Array(MAX_T).fill(Number(0));
let inputLine = 1;

const recordMove = (arr, length) => {
    let time = 1;
    for (let i = 0; i < length; i++) {
        let [cmd, distance] = input[inputLine++].split(' ');
        distance = Number(distance);
        for (j = 0; j < distance; j++) {
            arr[time] = arr[time - 1] + (cmd === 'R' ? 1 : -1);
            time++; 
        }
    }
    return [arr, time];
}

const checkDistance = (arrA, arrB, time) => {
    let ans = -1;
    for (let i = 1; i < time; i++) {
        if (arrA[i] === arrB[i]) {
            ans = i;
            break;
        }
    }
    return ans;
}

let [moveA, timeA] = recordMove(posA, n);
let [moveB, timeB] = recordMove(posB, m);
const checkTime = checkDistance(moveA, moveB, timeA);
console.log(checkTime);

