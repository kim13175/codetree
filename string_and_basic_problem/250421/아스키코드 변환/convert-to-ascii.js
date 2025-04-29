const fs = require('fs');
const [ch, num] = fs.readFileSync(0).toString().trim().split(' ');

console.log(ch.charCodeAt() + ' ' + String.fromCharCode(num));