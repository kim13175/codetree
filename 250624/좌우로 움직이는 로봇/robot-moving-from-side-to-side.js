const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const OFFSET = 1000000;
let current = 1;

// Please Write your code here.
const checkMove = (length) => {
    let arr = Array(OFFSET + 1).fill(Number(0));
    let totalTime = 1;

    for (let i = 0; i < length; i++) {

        let [move, cmd] = input[current++].split(' ');
        move = Number(move);

        for (let j = 0; j < move; j++) {
            arr[totalTime] = arr[totalTime - 1] + (cmd === 'R' ? 1 : -1);
            totalTime++; 
        }
    }
    return [arr, totalTime];
}

const [moveA, timeA] = checkMove(n);
const [moveB, timeB] = checkMove(m);

const asyncTime = (timeA, timeB) => {
    /* A가 먼저 빨리 끝날 경우 B의 시간 만큼 마지막 위치로 채움 */
    if (timeA < timeB) {
        for (let i = timeA; i < timeB; i++) {
            moveA[i] = moveA[i - 1];
        }
    }
    /* B가 먼저 빨리 끝날 경우 B의 시간 만큼 마지막 위치로 채움 */ 
    else if (timeA > timeB) {
        for (let i = timeB; i < timeA; i++) {
            moveB[i] = moveB[i - 1];
        }
    }
}

asyncTime(timeA, timeB);

const meetCount = (a, b) => {
    let cnt = 0;
    const timeMax = Math.max(timeA, timeB);
    for (let i = 0; i < timeMax; i++) {
        if (a[i] === b[i] && a[i - 1] !== b[i - 1]) {
            cnt += 1;
        }
    }
    return cnt;
}

console.log(meetCount(moveA, moveB));