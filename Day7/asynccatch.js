async function fetchData() {
  try {
    // Imagine fetchData is an asynchronous operation like an API call
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There was an error!', error);
  }
}

fetchData();
//async: This keyword is used to define an asynchronous function.

//await: Used to wait for a promise to resolve or reject.

//try: Used to wrap the asynchronous code where errors might occur.

//catch: Catches any error that happens during the execution of the code inside the try block.
