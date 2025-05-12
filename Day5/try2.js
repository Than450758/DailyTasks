/*throw is used to manually create an error when something unexpected occurs.

try block is where you place the code that might cause an error.

catch block handles the error gracefully.

finally is optional and runs no matter what.*/
/*function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero"); // throwing an error
    }
    return a / b;
  }
  
  try {
    let result = divide(10, 0); // this will throw an error
    console.log("Result:", result);
  } catch (error) {
    console.error("Error caught:", error.message); // catching and handling the error
  } finally {
    console.log("This block always runs, whether or not an error occurred.");
  }
*/
  

  /*function validateAge(age) {
    if (typeof age !== "number") {
      throw new TypeError("Age must be a number");
    }
    if (age < 18) {
      throw new RangeError("You must be at least 18 years old");
    }
    return "Access granted";
  }
  
  try {
    const message = validateAge(17); // will throw TypeError
    console.log(message);
  } catch (error) {
    console.error("Validation error:", error.message); // handle error
  }
  */


  function valid(i){
    if (i==0){
        throw  new Error("Error");
    }
    
    return "correct";
  }
  try{
    let arr=valid(0);
    console.log(arr);
  }
  catch(eror){
    console.error("Validation error:", eror.message);
  }