const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rawStudentData = input.slice(1, n + 1);

// Please Write your code here.
class Test {
    constructor(name, kor, eng, math) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }

    printScore() {
        console.log(`${this.name} ${this.kor} ${this.eng} ${this.math}`);
    }
}

let studentsScore = [];

for (let i = 0; i < rawStudentData.length; i++) {
    rawStudentData[i] = rawStudentData[i].trim().split(' ');

    perName = rawStudentData[i][0];
    perKor = rawStudentData[i][1];
    perEng = rawStudentData[i][2];
    perMath = rawStudentData[i][3];

    studentsScore.push(new Test(perName, perKor, perEng, perMath));
}

studentsScore = studentsScore.sort((prev, cur) => {
    if (cur.kor === prev.kor) {
        if (cur.eng === prev.eng) {
            return cur.math - prev.math;
        }
        return cur.eng - prev.eng;
    }
    return cur.kor - prev.kor;
});

for (let i = 0; i < studentsScore.length; i++) {
    studentsScore[i].printScore();
}
