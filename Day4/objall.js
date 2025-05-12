const myDate = new Date(1995, 11, 17);

console.log(myDate.getTime()); // 819129600000

myDate.getTime = function () {
  console.log("something else!");
};

myDate.getTime(); // 'something else!'
//////////////////////////
//object.create ()
const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!
//eg2
const person = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

// Create a new object with `person` as its prototype
const student = Object.create(person);
student.name = "Alice";
student.greet(); // Output: Hello, my name is Alice
//eg3
const car = {
  describe() {
    console.log(`This car is a ${this.brand}`);
  }
};

const myCar = Object.create(car, {
  brand: {
    value: "Toyota",
    writable: true,
    enumerable: true
  }
});

myCar.describe(); // Output: This car is a Toyota
//