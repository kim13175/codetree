const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
class NumberList {
    constructor(num, index, move) {
        this.num = num;
        this.index = index;
        this.move = move;
    }

    moveIndex(to) {
        this.move = to;
    }
}

const makeList = (arr) => {
    let list = [];

    for (let i = 0; i < arr.length; i++) {
        list.push(new NumberList(arr[i], i, i))
    }

    return list;
}

const numberArray = makeList(arr);

const sortingArray = numberArray.sort((prev, cur) => {
    return prev.num - cur.num;
});

for (let i = 0; i < sortingArray.length; i++) {
    sortingArray[i].moveIndex(i + 1)
}

const indexSorting = numberArray.sort((prev, cur) => {
    return prev.index - cur.index;
});

indexSorting.forEach((element) => {
    process.stdout.write(`${element.move} `);
});