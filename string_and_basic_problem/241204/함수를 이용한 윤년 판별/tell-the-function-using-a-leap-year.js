function checkLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0) return false;
        return true;
    } 
    return false;
}

fs = require('fs');
year = Number(fs.readFileSync(0).toString().trim());
process.stdout.write(checkLeapYear(year).toString());