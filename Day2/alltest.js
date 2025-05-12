/*const cartItems = [
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
//////////////////////////////////////////////
const userRoles = ['viewer', 'editor']; // Roles assigned to the current user
const requiredRoles = ['admin', 'editor']; // Roles allowed to access the page

const hasAccess = requiredRoles.some(role => userRoles.includes(role));

if (hasAccess) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}
*/
/*const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number * 2);
  });

  const doubled = numbers.map(function(number) {
    return number * 2;
  });
  console.log(doubled);*/


 /* const comments = ['Nice post!', 'Thanks for sharing', 'Very helpful'];

const commentsContainer = document.getElementById('comments');

comments.forEach(comment => {
  const p = document.createElement('p');
  p.textContent = comment;
  commentsContainer.appendChild(p);
});*/

/* Define the function first
function updateUserStatus(userId, isActive) {
  console.log(`User ${userId} status updated to active: ${isActive}`);
  // In a real app, this might be an API call or DB update
  // e.g., database.updateUser(userId, { active: isActive });
}

const usersToUpdate = [
  { id: 1, name: 'Alice', active: false },
  { id: 2, name: 'Bob', active: false }
];

// Now this works correctly
usersToUpdate.forEach(user => {
  updateUserStatus(user.id, true); // mark as active
});*/

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const numbers = [0, 1, 2, 5, 10];
const cubedNumbers = map(function (x) {
  return x * x * x;
}, numbers);
console.log(cubedNumbers); // [0, 1, 8, 125, 1000]
//////////////////
//factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
/////////////////////////////////////

function foo(i) {
  if (i < 0) {
    return;
  }
  console.log(`begin: ${i}`);
  foo(i - 1);
  console.log(`end: ${i}`);
}
foo(3);

// Logs:
// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3
//////////////////////////
nested function

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"
//////////////////
An object containing methods for manipulating the inner variables of the outer function can be returned