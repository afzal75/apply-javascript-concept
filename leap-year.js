function isLeapYear (year) {
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const myYear = 2130;
const myYearLeap = isLeapYear(myYear);
console.log('2130 is leap year', myYearLeap);

const yourYear = 2244;
const isYourYear = isLeapYear(yourYear);
console.log('2224 is leap year', isYourYear);