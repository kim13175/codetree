const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let index = 0;
const [n, m] = input[index++].split(' ').map(Number);
let A_moves = [];
for (let i = 0; i < n; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  A_moves.push([v, t]);
}
let B_moves = [];
for (let i = 0; i < m; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  B_moves.push([v, t]);
}

const checkMove = (moves) => {
  let arr = [];
  let totalTime = 0;
  let currentDist = 0;
  for (let i = 0; i < moves.length; i++) {
    let [dist, time] = moves[i]

    for (let j = 0; j < time; j++) {
      currentDist += dist;
      arr[totalTime + j] = currentDist;
    }

    totalTime += time;
  }
  return [arr, totalTime];
}

const [moveA, timeA] = checkMove(A_moves);
const [moveB, timeB] = checkMove(B_moves);

const asyncTime = (timeA, timeB) => {
  
  if (timeA > timeB) {
    for (let i = timeB; i < timeA; i++) {
      moveB[i] = moveB[timeB - 1];
    }
  }
  else if (timeA < timeB) {
    for (let i = timeA; i < timeB; i++) {
      moveA[i] = moveA[timeA - 1];
    }
  } 
}

const checkFirst = (arrA, arrB) => {
  let prevLeader = null;
  let cnt = 0;
  for (let i = 0; i < arrA.length; i++) {
    let leader = null
    if (arrA[i] > arrB[i]) {
      leader = 'A';      
    } else if (arrA[i] < arrB[i]) {
      leader = 'B';
    } else {
      leader = null;
    }

    if (prevLeader !== leader) {
      cnt++;
    }

    prevLeader = leader;
  }

  return cnt;
}

asyncTime(timeA, timeB)
console.log(checkFirst(moveA, moveB));