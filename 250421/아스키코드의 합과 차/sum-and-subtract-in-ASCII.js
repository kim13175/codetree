const fs = require('fs');
const [ch1, ch2] = fs.readFileSync(0).toString().trim().split(' ');

const addAscii = (ch1, ch2) => {
    return ch1.charCodeAt() + ch2.charCodeAt();
}

const subAscii = (ch1, ch2) => {
    if (ch1.charCodeAt() > ch2.charCodeAt()) return ch1.charCodeAt() - ch2.charCodeAt();
    return ch2.charCodeAt() - ch1.charCodeAt();
}

console.log(addAscii(ch1, ch2) + ' ' + subAscii(ch1, ch2));