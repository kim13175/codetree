const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

for (ch of input) {
    console.log(ch);
}