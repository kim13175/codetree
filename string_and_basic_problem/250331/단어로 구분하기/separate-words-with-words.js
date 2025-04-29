const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ');
let splitStringArray = new Array(input.length);

splitStringArray = input;


splitStringArray.map((element) => console.log(element));