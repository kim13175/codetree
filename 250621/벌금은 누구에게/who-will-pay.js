const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);

const checkDemerit = (m) => {
    let students = Array(n).fill(Number(0));
    for (let i = 0; i < m; i++) {
        students[penalizedPersons[i] - 1] += 1;
    }
    return students;
}

const choseStudent = (arr, k) => {
    let choosen = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= k) return i + 1; 
    }
    return choosen;
}

const studentsArray = checkDemerit(m);
const studentIndex = choseStudent(studentsArray, k);
console.log(studentIndex);