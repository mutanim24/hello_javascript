function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else{
        return false;
    }
}

let myYear = isLeapYear(2023);
console.log(myYear);
let herYear = isLeapYear(2024);
console.log(herYear);