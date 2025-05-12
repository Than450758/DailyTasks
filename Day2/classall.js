//constructor
class Person {
  name;//property

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}
const giles = new Person("Giles");

giles.introduceSelf(); // Hi! I'm Giles

/////omit constructor
class Animal {
  sleep() {
    console.log("zzzzzzz");
  }
}

const spot = new Animal();

spot.sleep(); // 'zzzzzzz'
///////////////////////
//inheritance
class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}
const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade("my paper"); // some random grade
//////////////////////////////////


//encapsulation
class Student extends Person {
  #year;// #year is a private data property but if code outside the object tries to access #year the browser throws an error:

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }
}
const summers = new Student("Summers", 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery(); // true

summers.#year; // SyntaxError



////////////////
//private m.ethod
class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod() {
    console.log("You called me?");
  }
}

const myExample = new Example();

myExample.somePublicMethod(); // 'You called me?'

myExample.#somePrivateMethod(); // SyntaxError
///////////////////////////////////////////