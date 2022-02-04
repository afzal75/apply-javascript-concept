// const number = 5;
// const reminder = number % 2;
// console.log(reminder == 0);


// even number

// function isEven (number) {
//     if (number % 2 == 0){
//         return true;
//     }
//     return false;
// }

// const myNumber = 1641;
// const isMyNumberEven = isEven(myNumber);
// console.log('is my number even', isMyNumberEven);

// const herNumber = 1892;
// const isHerNumberEven = isEven(herNumber);
// console.log('is her number even', isHerNumberEven);



// function isOdd (number) {
//     if (number % 2 != 0) {
//         return true;
//     }
//     return false;
// }

// const yourNumber = 1600;
// const herYourNumber = isOdd(yourNumber);
// console.log(herYourNumber);

// const ourNumber = 1601;
// const herOurNumber = isOdd (ourNumber);
// console.log(herOurNumber);



function isEven (number) {
    if (number % 2 == 0){
        return true;
    }
    return false;
}


const myEven = 1600;
const myEvenNumber = isEven(myEven);
console.log('my even number is',myEvenNumber);

const herEven = 1601;
const herEvenNumber = isEven (herEven);
console.log('her even number is', herEvenNumber);




function isOdd (number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}


const myOdd = 1666;
const myOddNumber = isOdd (myOdd);
console.log('my odd number is', myOddNumber);


const herOdd = 6161;
const herOddNumber = isOdd (herOdd);
console.log('her odd number is', herOddNumber);