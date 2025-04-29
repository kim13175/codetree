const fs = require('fs');
const [given_string_a, given_string_b] = fs.readFileSync(0).toString().split('\n');

const length_sum = given_string_a.length + given_string_b.length 

console.log(length_sum);