const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const students = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(" ").map(Number);
    students.push([height, weight, i]);
}

// Please Write your code here.
class Body {
    constructor(tall, weight, number) {
        this.tall = tall;
        this.weight = weight;
        this.number = number;
    }
}

const makeBodyArray = (arr) => {
    let bodyArr = [];

    for (let i = 0; i < arr.length; i++) {
        bodyArr.push(new Body(arr[i][0], arr[i][1], arr[i][2]))
    }

    return bodyArr;
}

const bodyArray = makeBodyArray(students).sort((prev, cur) => { 
    if (prev.tall === cur.tall) return cur.weight - prev.weight;
    return cur.tall - prev.tall;
}).forEach((body) => {
    console.log(`${body.tall} ${body.weight} ${body.number}`);
});

