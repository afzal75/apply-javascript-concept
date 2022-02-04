function getFactorial (number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

let myFactorial = 7;
let totalFactorial = getFactorial (myFactorial);
console.log(totalFactorial);