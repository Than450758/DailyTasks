// Get the canvas element and the context
const canvas = document.getElementById('myCanvas');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Function to draw a rectangle on the canvas
function drawRectangle(x, y, width, height, color) {
  ctx.fillStyle = color; // Set the fill color
  ctx.fillRect(x, y, width, height); // Draw the rectangle with the specified parameters
}

// Define input variables
const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = 'blue';

// Call the function to draw the rectangle
drawRectangle(x, y, width, height, color);

////////////////////////////////////////

//Refactor the code that generates the random number into a separate function called random(), which takes as parameters two generic bounds that the random number should be between, and returns the result.
//Update the chooseName() function so that it makes use of the random number function, takes the array to choose from as a parameter (making it more flexible), and returns the result.
//Print the returned result into the paragraph (para)'s textContent.
// Function to generate a random number between min and max
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to choose a random name from the provided array
function chooseName(names) {
  const randomIndex = random(0, names.length - 1);  // Generate random index within bounds of the array
  return names[randomIndex];  // Return the name at the randomly generated index
}

// Create a paragraph element to display the result
const para = document.createElement('p');

// Array of names
const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];

// Choose a random name and set it to para's textContent
para.textContent = chooseName(names);

// Append the paragraph to the body (or any other part of the page)
document.body.appendChild(para);
///////////////////////////////////////

const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');

// Function to check if a name has fewer than 5 characters
function isShort(name) {
  return name.length < 5;
}

// Filter the names array to get only those names that are shorter than 5 characters
const shortNames = names.filter(isShort);

// Convert the array to a string for better readability
para.textContent = shortNames.join(', '); // Join array items into a comma-separated string

// Don't edit the code below here!
section.innerHTML = ' '; // Clear previous content in section
section.appendChild(para); // Append the paragraph with the filtered names
///In this task, we have an array of names, and we're using Array.filter() to get an array of only names
// shorter than 5 characters. The filter is currently being passed a named function isShort() which checks the 
// length of the name, returning true if the name is less than 5 characters long, and false otherwise.