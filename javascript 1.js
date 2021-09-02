let message;
message = 'Hello World';
console.log(message);

let people;
people = 2;
console.log(people);

let admin, name;
name = 'Ali';
admin = name;
alert(admin); // "Ali" //

let cars = ['Lambo', 'Corvette', 'porche'];
console.log(cars.length);

let first = cars[0];
let last = cars[cars.length - 1];

let newLength = cars.push('mercedes');

let last = cars.pop(); // from the end

let first = cars.shift(); // remove from front

let newLength = cars.unshift(); // add to beginning()

cars.push();
let pos = cars.indexOf('jaguar');

let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1;
let n = 2;

let removedItems = vegetables.splice(pos, n);
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.

console.log(vegetables);
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems);
// ["Turnip", "Radish"]

function square(number) {
  return number * number;
}

function myFunc(theObject) {
  theObject.make = 'Toyota';
}

var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
var x, y;

x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"
// (the make property was changed by the function)

/*<button id="button_A">Press me</button>
    <h3 id="heading_A"></h3>*/

const buttonA = document.querySelector('#button_A');
const headingA = document.querySelector('#heading_A');

buttonA.onclick = function () {
  let name = prompt('What is your name?');
  alert('Hello ' + name + ', nice to see you!');
  headingA.textContent = 'Welcome ' + name;
};
