const arr1=['cat','dog','fish'];
console.log(arr1.length);//length()
console.log(arr1.toString);//toString(0)
console.log(arr1.at(1));
console.log(arr1[0]);;
console.log(arr1.join("*"));//join()
console.log(arr1.pop());//pop()
console.log(arr1.push("bear"));//push()
const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit1.shift());//shift() remove leftest value
const fruit2 = ["Banana", "Orange", "Apple", "Mango"];
let fruit3 = fruit2.shift();
console.log(fruit2);

const fruit4 = ["Banana", "Orange", "Apple", "Mango"];
let f5 = fruit4.shift();
console.log(f5);



const f7 = ["Banana", "Orange", "Apple", "Mango"];
console.log(f7.unshift("Lemon"));//add
console.log(f7);


const f8 = ["Banana", "Orange", "Apple", "Mango"];
console.log(f8[0] = "Kiwi");

const f9 = ["Banana", "Orange", "Apple", "Mango"];
console.log(delete f9[0]);

//concat()
 const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);


//copyWithin()
const f1 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(f1.copyWithin(2, 0, 2)
);

const f2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(f2.copyWithin(2, 0));

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);


//splice()
const f3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(f3.splice(2, 0, "Lemon", "Kiwi")
);
console.log(f3);

const f4 = ["Banana", "Orange", "Apple", "Mango"];
console.log(f4.splice(2, 2, "Lemon", "Kiwi")
);
console.log(f4);
const f5 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = f5.slice(1);
console.log(citrus);

const f6 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1 = f6.slice(3);
console.log(citrus1);





map 
filter
reduce
some 
include
foreach





//map()
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}


let num=[1,2,3,4,5];
const result=num.map(n=>n*2);
console.log(result);



const color=["red","green","blue"];
const items =color.map(color =>`${color}`);
console.log(items);
//////////////////////////////////////////////////////


//filter()
//eg1
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}
//eg2
let num=[1,2,3,4,5];
const result=num.filter(n=>n>2);
console.log(result);

////////////////////////////////////////////////////////////


//reduce()
//eg1
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
//eg2
let num=[1,2,3,4,5];
const result=num.reduce(n,a=>n+a);
console.log(result);

///////////////////////////////////////////////////////////


//The some() method checks if some array values pass a test.
//eg1
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value) {
  return value > 18;
}

////////eg2
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

// Check if there is any user older than 30
const hasOlderUser  = users.some(user => user.age > 30);

console.log(hasOlderUser ); // Output: true


const numbers = [1, 2, 3, 4, 5];
// Check if there is at least one even number
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber); // Output: true


///eg3
const cartItems = [
  { id: 1, name: 'Laptop', quantity: 1, inStock: true },
  { id: 2, name: 'Headphones', quantity: 2, inStock: true },
  { id: 3, name: 'Mouse', quantity: 1, inStock: false }, // out of stock
];

const hasOutOfStock = cartItems.some(item => !item.inStock);

if (hasOutOfStock) {
  console.log("Some items in your cart are out of stock.");
} else {
  console.log("All items are in stock. Proceed to checkout.");
}

///include() return T/F
let text = "Hello world, welcome to the universe.";
let result = text.includes("world", 12);

//The forEach() method calls a function for each element in an array.

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}

/////destructure array
let [fn,mn,ln]=['Dylan','Coding god','Israel'];
ln='Cereal';
console.log(ln);