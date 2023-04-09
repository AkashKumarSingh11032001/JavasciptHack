//  hoisting: all variable that declared in program will be pushed to top of the program
// remember onlly variable will be pushed not its value assigned with that

// same thing will happen to in case of function as well, everytime you declare function, it will be hoisted at top
console.log(age);

//  Ex-1
var age = 5;

function hoist() {
  console.log(message);
  var message = "Hola!";
  console.log(message);
}

hoist();

// Ex-2

// const variable can't be hoist, Remember
console.log(num);
const num = 5;
