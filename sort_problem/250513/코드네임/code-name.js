const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [code0, s0] = input[0].split(' ');
const score0 = Number(s0);
const [code1, s1] = input[1].split(' ');
const score1 = Number(s1);
const [code2, s2] = input[2].split(' ');
const score2 = Number(s2);
const [code3, s3] = input[3].split(' ');
const score3 = Number(s3);
const [code4, s4] = input[4].split(' ');
const score4 = Number(s4);

// Please Write your code here.
class matrix {
    constructor(code, score) {
        this.code = code;
        this.score = score;
    }
}

let matrix0 = new matrix(code0, score0);
let matrix1 = new matrix(code1, score1);
let matrix2 = new matrix(code2, score2);
let matrix3 = new matrix(code3, score3);
let matrix4 = new matrix(code4, score4);

let matrixArr = [
    matrix0,
    matrix1,
    matrix2,
    matrix3,
    matrix4
]

const minScoreCode = (arr) => {
    let code = '';
    let tempScore = 101;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].score < tempScore) {
            tempScore = arr[i].score;
            code = arr[i].code;
        }
    }

    return [code, tempScore];
}

const [minCode, minScore] = minScoreCode(matrixArr);

console.log(minCode, minScore);
