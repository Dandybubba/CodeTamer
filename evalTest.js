let message;
message = 'Hello World';
console.log(message);

function myFunc(theObject) {
  theObject.make = 'Toyota';
}

var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
var x, y;

x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"

let cars = ['Lambo', 'Corvette', 'porche'];
console.log(cars.length);

let first = cars[0];
let last = cars[cars.length - 1];

let newLength = cars.push('mercedes');

last = cars.pop('mercedes');
first = cars.shift('Lambo');

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  else return n * factorial(n - 1);
}
var a, b, c, d, e;
a = factorial(1); // a gets the value 1
b = factorial(2); // b gets the value 2
c = factorial(3); // c gets the value 6
d = factorial(4); // d gets the value 24
e = factorial(5); // e gets the value 120
