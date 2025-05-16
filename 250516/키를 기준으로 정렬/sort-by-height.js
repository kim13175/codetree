const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const studentsInput = [];
for (let i = 1; i <= n; i++) {
    studentsInput.push(input[i].split(' '));
}
// Please Write your code here.
class PersonInfo {
    constructor(name, tall, weight) {
        this.name = name;
        this.tall = tall;
        this.weight = weight;
    }

    printInfo() {
        console.log(`${this.name} ${this.tall} ${this.weight}`);
    }
}

let students = [];

for (let i = 0; i < studentsInput.length; i++) {
    students.push(new PersonInfo(studentsInput[i][0], studentsInput[i][1], studentsInput[i][2]));
}

students = students.sort((prev, cur) => { return prev.tall - cur.tall });

for (let i = 0; i < students.length; i++) {
    students[i].printInfo();
}
