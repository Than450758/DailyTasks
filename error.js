//Range error
let num = 1;
try {
  num.toPrecision(500);   // A number cannot have 500 significant digits
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;

}


try {
  let num = 123.456;
  // The toPrecision method accepts a value between 1 and 100.
  console.log(num.toPrecision(500)); // Throws RangeError
} catch (e) {
  console.error(e); // RangeError: toPrecision() argument must be between 1 and 100
}


try {
  let arr = new Array(-1); // Array length cannot be negative
} catch (e) {
  console.error(e); // RangeError: Invalid array length
}


function recurse() {
  return recurse(); // Infinite recursion
}

try {
  recurse();
} catch (e) {
  console.error(e); // RangeError: Maximum call stack size exceeded
}


//A ReferenceError is thrown if you use (reference) a variable that has not been declared
//A ReferenceError in JavaScript occurs when code refers to a variable that hasn't been declared.
let x = 5;
try {
  x = y + 1;   // y cannot be used (referenced)
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}


let count = 5;

try {
  console.log(cnount); // Typo in variable name
} catch (e) {
  console.error(e); // ReferenceError: cnount is not defined
}


try {
  console.log(x); // x is in the TDZ
  let x = 10;
} catch (e) {
  console.error(e); // ReferenceError: Cannot access 'x' before initialization
}


///A SyntaxError is thrown if you try to evaluate code with a syntax error.
try {
  eval("alert('Hello)");   // Missing ' will produce an error
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}

try {
  eval("await fetch('https://example.com')"); // Not inside async function
} catch (e) {
  console.error(e); // SyntaxError: Unexpected reserved word 'await'
}


"use strict";
try {
  eval("function sum(a, a) { return a + a; }");
} catch (e) {
  console.error(e); // SyntaxError: Duplicate parameter name not allowed in this context
}

//A TypeError is thrown if an operand or argument is incompatible with the type expected by an operator or function
let num = 1;
try {
  num.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}


try {
  let obj;
  console.log(obj.name); // obj is undefined
} catch (e) {
  console.error(e); // TypeError: Cannot read properties of undefined (reading 'name')
}


"use strict";
try {
  function showThis() {
    this.name = "Alice"; // 'this' is undefined in strict mode
  }
  showThis();
} catch (e) {
  console.error(e); // TypeError: Cannot set property 'name' of undefined
}
//A URIError is thrown if you use illegal characters in a URI function:
try {
  decodeURI("%%%");   // You cannot URI decode percent signs
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}

try {
  decodeURI("%"); // Invalid escape sequence
} catch (e) {
  console.error(e); // URIError: URI malformed
}
