const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
/* 개발자 수, 전염 효과, 번호, 실행되는 줄 */
const [n, k, p, t] = input[0].split(' ').map(Number);
let shakes = [];
for (let i = 1; i <= t; i++) {
    const [time, person1, person2] = input[i].split(' ').map(Number);
    shakes.push({ time, person1, person2 });
}
/* 개발자 명단 */
const person = Array(n).fill(Number(0));
const infectionList = Array(n).fill(Number(k));

shakes = shakes.sort((prev, cur) => {
    return prev.time - cur.time;
});

const infection = (shakes) => {
    person[p - 1] = 1;
    for (let i = 0; i < shakes.length; i++) {
        const x = shakes[i].person1 - 1;
        const y = shakes[i].person2 - 1;
        if (person[x] === 1 && infectionList[x] > 0) {
            person[y] = 1;
            infectionList[x] -= 1;
        } else if (person[y] === 1 && infectionList[y] > 0) {
            person[x] = 1;
            infectionList[y] -= 1;
        } else if (person[y] === 1 && person[x] === 1) {
            infectionList[x] -= 1;
            infectionList[y] -= 1
        }
    } 
}

infection(shakes);
console.log(person.join(''));