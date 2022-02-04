var myName = 'Afzak';
var bookPrice = 150;
var isWhiteColor = false;


// array

var partners = ['sakib', 'tamim', 'sabib', 'nakib']

var elemenCount = partners.length;

var sabibIndex = partners.indexOf('sabib');

partners.push ('talib');
partners.pop();

// Conditional

if (bookPrice < 120) {
    console.log('I this buy book');
}
else {
    console.log('I cannot this buy book');
}

// loop 
var i = 0;
while (i  <= 10) {
    i++;
}

for (var i = 0; i <= 10; i++) {

}

//function

function addTwoNumbers (num1, num2) {
    var total = num1 + num2;
    return total
}
var fix1 = 77;
var fix2 = 88;
var result = addTwoNumbers (77, 88);
console.log(result);

// let Const
// value of variable could change
let price = 33;
price = 55;
price = 88;

// value of the variable will not change

const name = ' Afzal';
console.log(name);

// console.log(partners);