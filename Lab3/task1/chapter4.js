//Methods of primitives TASK1
let str = "Hello";
str.test = 5;
alert(str.test); //it won't work

//Numbers TASK1
let a = +prompt("Enter a number", 0);
let b = +prompt("Enter another number", 0);
alert(a+b);

//Numbers TASK2
alert(Math.round(6.35 * 10) / 10);

//Numbers TASK3
function readNumber() {
  let num;
  do {
    num = prompt("Enter a number", 0);
  } while ( !isFinite(num) );
  if (num === null || num === '') return null;
  return +num;
}
alert(`Read: ${readNumber()}`);

//Numbers TASK4
let i = 0;
while (i != 10) {
  i += 0.2;
} //presicion loss

//Numbers TASK5
function random(min, max) {
  return min + Math.random() * (max - min);
}
alert(random(1, 5));

//Numbers TASK6
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
alert(randomInteger(1, 5));

//Strings TASK1
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

//Strings TASK2
function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

//Strings TASK3
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

//Strings TASK4
function extractCurrencyValue(str) {
  return +str.slice(1);
}

//Arrays TASK1
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
alert( fruits.length ); // 4

//Arrays TASK2
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert(styles.shift());
styles.unshift("Rap", "Reggae");

//Arrays TASK3
let arr = ["a", "b"];
arr.push(function() {
  alert( this );
});

arr[2](); //whole array

//Arrays TASK4
function sumInput() {
  let numbers = [];
  while (true) {
    let value = prompt("Enter a number", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }
  let sum = 0; 
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
alert( sumInput() );

//Arrays TASK5
function getMaxSubSum(arr) {
    let maxSum = 0;
    let tempSum = 0;
    for (let item of arr){
        tempSum += item;
        maxSum = Math.max(maxSum, tempSum);
        if (tempSum < 0) tempSum = 0;
    }
    return maxSum;
}

//Array methods TASK1
function camelize(str) {
  return str
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

//Array methods TASK2
function filterRange(arr, a, b) {
  return arr.filter(item => (item >= a && item <= b));
}

//Array methods TASK3
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

//Array methods TASK4
function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

//Array methods TASK5
function copySorted(arr) {
  return arr.slice().sort();
}

//Array methods TASK6
function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };

  this.calculate = function(str) {
    let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

//Array methods TASK7
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names = users.map(item => item.name);
alert( names );

//Array methods TASK8
let johny = { name: "John", surname: "Smith", id: 1 };
let petey = { name: "Pete", surname: "Hunt", id: 2 };
let maryy = { name: "Mary", surname: "Key", id: 3 };
let usersy = [ johny, petey, maryy ];
let usersMapped = usersy.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // John Smith

//Array methods TASK9
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

//Array methods TASK10
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

//Array methods TASK11
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

//Array methods TASK12
function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

//Array methods TASK13
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

//Map and Set TASK1
function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) );

//Map and Set TASK2
function aclean(arr) {
  let map = new Map();
  for (let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
  }
  return Array.from(map.values());
}

//Map and Set TASK3
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");

//WeakMap and WeakSet TASK1
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();
readMessages.add(messages[0]);
readMessages.add(messages[1]);
alert("Read message 0: " + readMessages.has(messages[0]));
messages.shift();
alert("Read message 0: " + readMessages.has(messages[0]));

//WeakMap and WeakSet TASK2
let readMap = new WeakMap();
readMap.set(messages[0], new Date(2017, 1, 1));

//Object.keys, values, entries TASK1
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

alert( sumSalaries(salaries) );

//Object.keys, values, entries TASK2
let user = {
  name: "John",
  age: 30
};

function count(obj) {
    return Object.keys(obj).length;
}

alert( count(user) );

//Destructuring assignment TASK1
let user1 = { name: "John", years: 30 };
let {name, years: age, isAdmin = false} = user1;
alert( name );
alert( age );
alert( isAdmin );

//Destructuring assignment TASK2
let salaries1 = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;
  for (let [name, salary] of Object.entries(salaries1)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }
  return maxName;
}
alert( topSalary(salaries1) );

//Date and time TASK1
let date = new Date(2012, 1, 20, 3, 12);

//Date and time TASK2
function getWeekDay(date) {
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  return days[date.getDay()];
}

//Date and time TASK3
function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) {
    day = 7;
  }
  return day;
}

//Date and time TASK4
function getDateAgo(date, days) {
  let dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

//Date and time TASK5
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

//Date and time TASK6
function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - today;
  return Math.round(diff / 1000);
}

//Date and time TASK7
function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let diff = tomorrow - now;
  return Math.round(diff / 1000);
}

function formatDate(date) {
  let diff = new Date() - date;

  if (diff < 1000) {
    return 'right now';
  }

  let sec = Math.floor(diff / 1000);
  if (sec < 60) {
    return sec + ' sec. ago';
  }

  let min = Math.floor(diff / 60000);
  if (min < 60) {
    return min + ' min. ago';
  }

  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2));

  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

//JSON TASK1
let user2 = {
  name: "John",
  age: 30
};
let user3 = JSON.parse(JSON.stringify(user2));

//JSON TASK2
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));