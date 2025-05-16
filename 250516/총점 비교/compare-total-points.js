const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const studentData = input.map(line => line.split(' '));

// Please write your code here.
class record {
    constructor(name, course1, course2, course3) {
        this.name = name;
        this.course1 = course1;
        this.course2 = course2;
        this.course3 = course3;
    }
}

const makeRecordsArray = (arr) => {
    let recordArray = [];

    for (let i = 0; i < arr.length; i++) {
        recordArray.push(new record(arr[i][0], arr[i][1], arr[i][2], arr[i][3]));
    }

    return recordArray;
}

const totalValue = (instance) => {
    return (parseInt(instance.course1) + parseInt(instance.course2) + parseInt(instance.course3));
}

const recordData = makeRecordsArray(studentData).sort((cur, prev) => {
    return totalValue(cur) - totalValue(prev); 
});

recordData.forEach((record) => {
    console.log(`${record.name} ${record.course1} ${record.course2} ${record.course3}`);
})