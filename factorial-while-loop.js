// function getFactorial (number) {
//     let factorial = 1;
//     let i = 1;
//     while (i <= number) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }

// let firstFactorial = 6;
// let thisFactorial = getFactorial (firstFactorial);
// console.log(thisFactorial);


// function getFactorial (number) {
//     let factorial = 1;
//     let i = number;
//     while (i >= 1) {
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }
// let firstFactorial = 8;
// let totalFactorial = getFactorial (firstFactorial);
// console.log(totalFactorial);



// foor loop reverse 


function getFactorial2 (number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial
}
let firstFactorial = 8;
let totalFactorial = getFactorial2 (firstFactorial);
console.log(totalFactorial);