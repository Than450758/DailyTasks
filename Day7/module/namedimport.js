import Person, { greet } from './namedexport.js';
  const aman = new Person('Aman');
  console.log(aman.sayHello());
  console.log(greet('Rohan'));