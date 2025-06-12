const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1).map(line => line.trim().split(' ').map(Number));

// Please Write your code here.
class coordinate {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
    }

    calcDistance() {
        return Math.abs(this.x) + Math.abs(this.y);
    }
}

const makePoint = (arr) => {
    let pointArr = [];

    for (let i = 0; i < arr.length; i++) {
        pointArr.push(new coordinate(arr[i][0], arr[i][1], i + 1))
    }

    return pointArr;
}

const pointArray = makePoint(points);

const sortingPointArray = pointArray.sort((prev, cur) => {
    const distPrev = prev.calcDistance();
    const distCur = cur.calcDistance();

    if (distPrev === distCur) {
        return prev.index - cur.index;
    }

    return distPrev - distCur;
})

const calcSorting = sortingPointArray.forEach((point) => {
    console.log(point.index)
})