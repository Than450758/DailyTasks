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

// Define the function first
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
});
