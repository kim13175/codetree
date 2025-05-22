const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const studentInputs = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(' ').map(Number);
    studentInputs.push([height, weight]);
}

// Please Write your code here.
class Student {
    constructor(height, weight, index) {
        this.height = height;
        this.weight = weight;
        this.index = index;
    }
}

const makeStudent = (arr) => {
    let studentArray = [];

    for (let i = 0; i < arr.length; i++) {
        studentArray.push(new Student(arr[i][0], arr[i][1], i + 1))
    }

    return studentArray;
}

const studentArray = makeStudent(studentInputs).sort((prev, cur) => {
    if (prev.height === cur.height) return cur.weight - prev.weight;
    return prev.height - cur.height;
});

studentArray.forEach((student) => {
    console.log(`${student.height} ${student.weight} ${student.index}`)
})