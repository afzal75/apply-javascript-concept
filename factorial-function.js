let factorial = 1;
for (let i = 1; i <= 5; i++) {
    // console.log(i);
    factorial = factorial * i;
}
// console.log(factorial);


function getFactorial (number){
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
let firstFactorial = 7;
let thisFactorial = getFactorial(firstFactorial);
// console.log('factorial of 7 is',thisFactorial);

let secondFactorial = getFactorial (9);
// console.log('factorial of 9 is', secondFactorial);



function thnakFactorial (numbers) {
    let factorial = 1;
    for (let i = 1; i <=numbers; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

var thirdFactorial = 9;
var totalFactorial = thnakFactorial (thirdFactorial);
// console.log(totalFactorial);

var sevenFactorial = 10;
var resultFactorial = thnakFactorial (sevenFactorial);
// console.log(resultFactorial);


function jetFactorial (number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

let fifthFactorial = 14;
let thenFactorial = jetFactorial (fifthFactorial);
console.log(thenFactorial);

let sixthFactorial = 16;
let whyFactorial = jetFactorial (sixthFactorial);
console.log(whyFactorial);