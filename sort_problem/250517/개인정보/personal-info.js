const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const students = [];
for (let i = 0; i < 5; i++) {
  const [name, heightStr, weightStr] = input[i].split(' ');
  const height = Number(heightStr);
  const weight = Number(weightStr);
  students.push({ name, height, weight });
}

// Please Write your code here.
class PersonInfo {
  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  printInfo() {
    console.log(`${this.name} ${this.height} ${this.weight}`);
  }
}

const makeInfoClass = (arr) => {
  let infoClass = [];
  for (let i = 0; i < arr.length; i++) {
    infoClass.push(new PersonInfo(arr[i].name, Number(arr[i].height), Number(arr[i].weight).toFixed(1)));
  }
  return infoClass;
}

const sortName = (arr) => {
  return [...arr].sort((prev, cur) => {
    return prev.name.localeCompare(cur.name);
  })
}

const sortHeight = (arr) => {
  return [...arr].sort((prev, cur) => {
    if (cur.height === prev.height) {
      return prev.name.localeCompare(cur.name);
    }
    return cur.height - prev.height;
  })
}

const printPersonList = (arr) => {
  const sortingName = sortName(arr);
  const sortingHeight = sortHeight(arr);
  console.log('name');
  for (let i = 0; i < arr.length; i++) {
    sortingName[i].printInfo();
  }

  console.log('\n' + 'height');
  for (let i = 0; i < arr.length; i++) {
    sortingHeight[i].printInfo();
  }
}

printPersonList(makeInfoClass(students));