const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);

const checkDemerit = (m, k) => {
    let students = Array(n).fill(Number(0));
    for (let i = 0; i < m; i++) {
        let studentIndex = penalizedPersons[i] - 1;
        students[studentIndex] += 1;
        if (students[studentIndex] >= k) return studentIndex + 1;
    }
    return -1;
}

const demeritStudent = checkDemerit(m, k);
console.log(demeritStudent);