const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));

// Please write your code here.
const queryIndexSum = (queryA, queryB) => {
    let sum = 0;
    for (i = queryA; i <= queryB; i++) {
        sum += A[i - 1];
    }
    return sum;
}

const allSumPrint = () => {
    for (let i = 0; i < queries.length; i++) {
        console.log(queryIndexSum(queries[i][0], queries[i][1]));
    }
}

allSumPrint();
