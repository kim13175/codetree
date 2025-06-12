const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
/* 홀수 인지 체크 => 짝수 번째 인덱스 -> 인덱스는 0번 부터 */
const checkEvenIndex = (index) => {
    if (index % 2 === 0) return true;
    return false;
}

/* 정렬하고 중앙 값 반환 */
const calcMiddle = (arr, length) => {
    /* 홀수 번째 인덱스 까지의 배열들을 정렬 
       (유니코드 방식의 정렬 방지하기 위해 메서드내 파라미터를 넣어줌) 
    */
    let sortingArr = arr.slice(0, length).sort((prev, cur) => { return prev - cur; });
    const mid = parseInt(length / 2);
    return sortingArr[mid];
}

/* 홀수 번째일 경우 중앙 값 추출 */ 
const attractMiddle = (arr) => {
    let middleList = [];
    for (let i = 0; i < arr.length; i++) {
        if (checkEvenIndex(i)) {
            middleList.push(calcMiddle(arr, i + 1));
        }
    }
    return middleList.join(' ');
}

console.log(attractMiddle(arr));