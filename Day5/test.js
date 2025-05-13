//array
const random = ["tree", 795, [0, 1, 2]];
console.log(random[2][2]);
//
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
/*For this array task, we provide you with a starting array, and you will work in somewhat the opposite direction. You need to:

Remove the last item in the array.
Add two new names to the end of the array.
Go over each item in the array and add its index number after the name inside parentheses, for example Ryu (0). Note that we don't teach how to do this in the Arrays article, so you'll have to do some research.
Finally, join the array items together in a single string called myString, with a separator of "-".8*/
let myArray = ["Ryu", "Ken", "Chun-Li", "Cammy", "Guile"];
myArray.pop();
myArray.push("Sagat", "M. Bison");
myArray = myArray.map((name, index) => `${name} (${index})`);//Now myArray is: ["Ryu (0)", "Ken (1)", "Chun-Li (2)", "Cammy (3)", "Sagat (4)", "M. Bison (5)"]
//Find the index of the "Eagles" item, and use that to remove the "Eagles" item.
//Make a new array from this one, called eBirds, that contains only birds from the original array whose names begin with the letter "E".
const index = birds.indexOf("Eagles");
if (index !== -1) {
  birds.splice(index, 1);
}
const eBirds = birds.filter(bird => bird.startsWith("E"));










///////////////////////////object
const cat = {
  name: 'Bertie',
  breed: 'Cymric',
  color: 'white',
  greeting: function() {
    console.log('Meow!');
  }
};

// 1. Store the value of the name property using bracket notation
const catName = cat['name'];

// 2. Run the greeting() method using dot notation
cat.greeting(); // This will log "Meow!" to the console

// 3. Update the color property value to 'black'
cat.color = 'black';
///////////////////////////


const band = {
  name: "Coldplay",
  nationality: "British",
  genre: "Alternative Rock",
  members: 4,
  formed: 1996,
  split: false,
  albums: [
    {
      name: "Parachutes",
      released: 2000
    },
    {
      name: "A Rush of Blood to the Head",
      released: 2002
    },
    {
      name: "Viva la Vida or Death and All His Friends",
      released: 2008
    },
    {
      name: "Everyday Life",
      released: 2019
    }]}
    
console.log("Band Name: " + band.name);
console.log("Nationality: " + band.nationality);
console.log("Genre: " + band.genre);
console.log("Number of Members: " + band.members);
console.log("Formed: " + band.formed);
console.log("Split: " + (band.split === false ? "Still together" : band.split));
console.log("Albums:");

band.albums.forEach((album, index) => {
  console.log(`  ${index + 1}. ${album.name} (Released: ${album.released})`);
});


const cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
  }
}

const cat2 = {
  name : 'Elfie',
  breed : 'Aphrodite Giant',
  color : 'ginger',
  greeting: function() {
    console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
  }
}

cat.greeting();
cat2.greeting();
    //anotheray

    function Cat(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
}

// Define greeting() on the prototype so it's shared
Cat.prototype.greeting = function() {
  console.log(`Hello, said ${this.name} the ${this.breed}.`);
};

// Create cat instances
const cat1 = new Cat("Bertie", "Cymric", "white");
const cat2 = new Cat("Whiskers", "Siamese", "gray");

// Call greeting methods
cat1.greeting();  // Hello, said Bertie the Cymric.
cat2.greeting();  // Hello, said Whiskers the Siamese.


/////////////function
//For the first task, you have to create a simple function — chooseName() — that prints a random name from the provided array (names)
const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];

function chooseName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  console.log(names[randomIndex]);
}

// Example usage:
chooseName();
