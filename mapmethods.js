const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  fruits.get("apples");
// add elements to a map with the set() method:
fruits.set("watermaleon", 500);
console.log(fruits.size);
const aa=fruits.delete("apples");
console.log(aa);
//to clear all items fruits.clear();

console.log(fruits.has("apples"));
//The forEach() method invokes a callback for each key/value pair in a map
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})

//difference bet: foreach and map
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number * 2);
  });
//forEach does not return a new array—it returns undefined
  const doubled = numbers.map(function(number) {
    return number * 2;
  });
  console.log(doubled);
  //map returns a new array with the results of applying the function to each element

  //The entries() method returns an iterator object with the [key,values] in a map:

  let text = "";
  for (const x of fruits.entries()) {
    text += x + "<br>";
  }
  //apples,500
//bananas,300
//oranges,200

let text1 = "";
for (const x of fruits.keys()) {
  text1 += x + "<br>";
}

//apples
//bananas
//oranges
for (const x of fruits.values()) {
    text += x + "<br>";
  }
  //500
//300
//200
//groupby
const people = [
    { name: "Alice", age: 21 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 21 },
  ];
  
  const groupedByAge = people.reduce((acc, person) => {
    (acc[person.age] = acc[person.age] || []).push(person);
    return acc;
  }, {});
  
  console.log(groupedByAge);

  
  typeof "John"          // Returns "string"
typeof ("John"+"Doe")  // Returns "string"
typeof 3.14            // Returns "number"
typeof (33 + 66)       // Returns "number"
typeof NaN             // Returns "number"
typeof 1234n           // Returns "bigint"
typeof true            // Returns "boolean"
typeof false           // Returns "boolean"
typeof {name:'John'}   // Returns "object"
typeof [1,2,3,4]       // Returns "object"
typeof {}              // Returns "object"
typeof []              // Returns "object"
typeof new Object()    // Returns "object"
typeof new Array()     // Returns "object"
typeof new Date()      // Returns "object"
typeof new Set()       // Returns "object"
typeof new Map()       // Returns "object"
typeof function () {}  // Returns "function"
typeof x               // Returns "undefined"
typeof null            // Returns "object"

//type conversion
//These will convert
Number("3.14")
Number(Math.PI)
Number(" ")
Number("")
//not convert
Number("99 88")
Number("John")


String(x)        
String(123)       
String(100 + 23)
similarity
x.toString()
(123).toString()
(100 + 23).toString()

d = new Date();
Number(d)    
similarity
d = new Date();
d.getTime() 

String(Date())  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
Date().toString()
/*getDate()	Get the day as a number (1-31)
getDay()	Get the weekday a number (0-6)
getFullYear()	Get the four digit year (yyyy)
getHours()	Get the hour (0-23)
getMilliseconds()	Get the milliseconds (0-999)
getMinutes()	Get the minutes (0-59)
getMonth()	Get the month (0-11)
getSeconds()	Get the seconds (0-59)
getTime()	Get the time (milliseconds since January 1, 1970)*/
Number(false)     // returns 0
Number(true)      // returns 1


5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2

/*Error Name	Description
EvalError	An error has occurred in the eval() function
RangeError	A number "out of range" has occurred
ReferenceError	An illegal reference has occurred
SyntaxError	A syntax error has occurred
TypeError	A type error has occurred
URIError	An error in encodeURI() has occurred*/
