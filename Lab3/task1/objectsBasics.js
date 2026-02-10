"use strict";

//Objects TASK 1
let user = {
    name: "John",
    surname: "Smith"
};

user.name = "Pete";
delete user.name;

//Objects TASK 2
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

//Objects TASK 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries.key;
}
alert(sum);

//Objects TASK 4
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] == 'number') {
            menu[key] *= 2;
        }
    }
}

//Object methods TASK 1
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // error

//Object methods TASK 2
let calculator = {
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//Constructor TASK 1
//yeah, it is possible

//Constructor TASK 2
function Calculator() {
    this.read = function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
}

//Constructor TASK 3
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt('How much to add?', 0);
    };
}

