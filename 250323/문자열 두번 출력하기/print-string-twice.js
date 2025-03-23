const fs = require("fs");
let given_string = fs.readFileSync(0).toString().trim();

for (let i = 0; i < 2; i++) {
    console.log(given_string);
}