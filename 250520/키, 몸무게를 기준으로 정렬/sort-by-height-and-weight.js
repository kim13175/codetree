const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const records = [];
for (let i = 1; i <= n; i++) {
  const [name, height, weight] = input[i].split(" ");
  records.push([name, Number(height), Number(weight)]);
}

// Please Write your code here.
class Person {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }

    printInfo() {
        console.log(`${this.name} ${this.height} ${this.weight}`);
    }
}

const addPerson = (arr) => {
    let personArr = [];
    for (let i = 0; i < arr.length; i++) {
        personArr.push(new Person(arr[i][0], arr[i][1], arr[i][2]));
    }
    return personArr;
}

const personArray = addPerson(records);


const sortingArray = personArray.sort((prev, cur) => {
    if (prev.height === cur.height) return cur.weight - prev.weight;
    return prev.height - cur.height;
});

sortingArray.forEach((element) => {
    element.printInfo();
})