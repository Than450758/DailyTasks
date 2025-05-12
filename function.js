//function constuctor
const myFunction = new Function("a", "b", "return a * b");

let x = myFunction(4, 3);
//same typing
const myFunction = function (a, b) {return a * b};

let x = myFunction(4, 3);
///////////////////////////////


//The toString() method returns the function as a string:
function myFunction(a, b) {
  return a * b;
}
let text = myFunction.toString();//function myFunction(a, b) { return a * b; }

//////////////////////////////////////////////
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Creating an object using the constructor
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

console.log(person1.name); // "Alice"
console.log(person2.age);  // 25

///////////////////////////////
const greet = new Function('name', 'return "Hello, " + name + "!";');
console.log(greet("Alice")); // Output: Hello, Alice!
///////////////////////////////////

//self invoking
(function () {
  let x = "Hello!!";  // I will invoke myself
})();


(function (name) {
  console.log("Hello, " + name + "!");
})("Alice");



//function can be used as value
function myFunction(a, b) {
  return a * b;
}

let y6 = myFunction(4, 3);

function myFunction(a, b) {
  return a * b;
}

let yy = myFunction(4, 3) * 2;
//anonymous function
const x = function (a, b) {return a * b};
let z = x(4, 3);//a function without a name

//passing function ass an arguments
function processUserInput(callback) {
  const name = "Bob";
  return callback(name);
}

const result = processUserInput(function(name) {
  return "Welcome, " + name;
});

console.log(result); // "Welcome, Bob"

function calculate(a, b, operation) {
  return operation(a, b);
}

const result = calculate(5, 3, function(x, y) {
  return x + y;
});

console.log(result); // 8


/////////////////////////
//return funcftion from another function
//eg1
function multiplier(x) {
  return function(y) {
    return x * y;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10
//eg2
function add(a,b) {
    return function(e) {
        res=a+b+e;
      console.log(a+"+"+b+"+"+e+"="+res);
      return res;
    };
  }
  
  const result = add(4,5)(8);
  console.log(result,"result");
//the argument object
x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

///////////////////////////////////
//default parameter
function myFunction(x, y = 10) {
  return x + y;
}
myFunction(5);




function createUser(username = "anonymous", isAdmin = false) {
  return { username, isAdmin };
}

console.log(createUser("john_doe")); // { username: 'john_doe', isAdmin: false }
console.log(createUser());           // { username: 'anonymous', isAdmin: false }

/////////////////////////////////////////
//Function Rest Parameter
//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);




function logMessages(level, ...messages) {
  messages.forEach(msg => console.log(`[${level}] ${msg}`));
}

logMessages("INFO", "Server started", "DB connected", "Listening on port 3000");
/*
[INFO] Server started
[INFO] DB connected
[INFO] Listening on port 3000
*/

///////////////////////////////////////////

//call method
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);

///////////////////////////////////////////////////////////


//call metod with parameter
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.call(person1, "Oslo", "Norway");

///////////////////
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6
//callback fun
function num(n, callback) {
    return callback(n);
}

const double = (n) => n * 2;

console.log(num(5, double));