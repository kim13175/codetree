const fs =require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ')

let count = 0;
for (let i = 0; i < input.length; i++) {
  count += input[i].length
}

console.log(count);