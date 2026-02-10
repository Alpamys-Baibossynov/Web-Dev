"use strict"; //the code will work the modern way 

//Hello, world! TASK 1
alert("I'm JavaScript!");

//this is a one-line comment

/* multiline comment hell yeah */

let message;
message = 'Hello';
alert(message);

//let user = 'Alpamys', age = 18, message2 = 'kawabanga!'; //not recommended

let user = 'Alpamys',
    myAge = 18,
    message2 = 'kawabanga!';

let first = 'haha';
let second;
second = first;

//Variables TASK 1
let admin,
    name;
name = "John";
admin = name;
alert(admin); // John

//Variables TASK 2
let planetEarth,
    currentUser;

//Variables TASK 3
const BIRTHDAY = '18.04.1982';
const age = someCode(BIRTHDAY);

let num = 23746853,
    bigInt = 9438469876816978637n,
    string = "Hello",  phrase = `Hello ${user}`,
    boolean = true,
    a = null,
    b; //b = undefined

typeof num; //number
typeof(bigInt); //bigint
typeof string; //string
typeof phrase; //string
typeof boolean; //boolean
typeof b; //undefined

//Data Types TASK 1
let name2 = "Ilya";
alert( `hello ${1}` ); // "hello, 1"
alert( `hello ${"name2"}` ); // "hello, name2"
alert( `hello ${name2}` ); // "hello, Ilya"

//Interaction TASK 1
let name3 = prompt("What is your name?");
alert(name3);

Number("123"); // 123
String(123); // "123"
Boolean(1); // true
Boolean(0); // false

//Basic Operators TASK 1
let a1 = 1, b1 = 1;
let c = ++a1; // 2
let d = b1++; // 1

//Basic Operators TASK 2
let a2 = 2;
let x = 1 + (a2 *= 2); // 5

//Basic Operators TASK 3
"" + 1 + 0; // "10"
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // "  -9  5"
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2

//Basic Operators TASK 4
let a3 = +prompt("First number?", 1);
let b3 = +prompt("Second number?", 2);
alert(a3 + b3); // 12

//Comparisons TASK 1
5 > 4; // true
"apple" > "pineapple" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

//Conditional branching TASK 1
if ("0") {
  alert( 'Hello' );
} //it will work

//Conditional branching TASK 2
let officialName = prompt('What is the "official" name of JavaScript?', '');
if (officialName == 'ECMAScript') {
  alert('Right!');
} else {
  alert('You don\'t know? ECMAScript!');
}

//Conditional branching TASK 3
let number = prompt('Enter a number', 0);
if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}

//Conditional branching TASK 4
let result = (a + b < 4) ? 'Below' : 'Over';

//Conditional branching TASK 5
let message3 = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' : '';

//Logical operators TASK 1
alert( null || 2 || undefined ); // 2

//Logical operators TASK 2
alert( alert(1) || 2 || alert(3) ); // 1, 2

//Logical operators TASK 3
alert( 1 && null && 2 ); // null

//Logical operators TASK 4
alert( alert(1) && alert(2) ); // 1, undefined

//Logical operators TASK 5
alert( null || 2 && 3 || 4 ); // 3

//Logical operators TASK 6
if (age >= 14 && age <= 90) {
  alert("ok");
}

//Logical operators TASK 7
if (!(age >= 14 && age <= 90)) {
  alert("not ok");
}

if (age < 14 || age > 90) {
  alert("not ok also");
}

//Logical operators TASK 8
if (-1 || 0) alert( 'first' ); // works, -1 is truthy
if (-1 && 0) alert( 'second' ); // doesn't work, 0 is falsy
if (null || -1 && 1) alert( 'third' ); // works, -1 && 1 is 1 which is truthy

//Logical operators TASK 9
let userName = prompt('Who\'s there?', '');
if (userName === 'Admin') {
    let pass = prompt('Password?', '');
    if (pass === 'TheMaster') {
        alert('Welcome!');
    } else if (pass === '' || pass === null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else if (userName === '' || userName === null) {
    alert('Canceled');
} else {
    alert('I don\'t know you');
}

//Loops TASK 1
let i = 3;
while (i) {
  alert( i-- );
} // 1

//Loops TASK 2
while (i < 5) {
  alert( ++i );
} // 1, 2, 3, 4, 5

while (i < 5) {
  alert( i++ );
} // 0, 1, 2, 3, 4

//Loops TASK 3
for (let i = 0; i < 5; i++) {
  alert( i );
} // 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) {
  alert( i );
} // 0, 1, 2, 3, 4

//Loops TASK 4
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}

//Loops TASK 5
while (i < 3) {
    alert( `number ${i5}!` );
    i5++;
}

//Loops TASK 6
let input = prompt("Enter a number", "");
while (input <= 100 && input !== null && input !== "") {
  input = prompt("Enter a number greater than 100?", "");
}

//Loops TASK 7
let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  alert(i);
}

//Switch statement TASK 1
if (browser === 'Edge') {
  alert( "You've got the Edge!" );
} else if (browser === 'Chrome' ||
         browser === 'Firefox' ||
         browser === 'Safari' ||
         browser === 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}

//Switch statement TASK 2
let a11 = +prompt('a?', '');

switch (a11) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
}

//Functions TASK 1
//No difference

//Functions TASK 2
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

//Functions TASK 3
function min(a, b) {
  return (a < b) ? a : b;
}

//Functions TASK 4
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

let x1 = prompt("x?", '');
let n1 = prompt("n?", '');

if (n1 < 1) {
  alert(`Power ${n1} is not supported, use a positive integer`);
} else {
  alert( pow(x1, n1) );
}

//Arrow functions TASK 1
let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
