function multiplier(x) {
  return function(y) {
    return x * y;
  };
}

 let yyy = function(y) {
    return 2 * y;
  };
const double = multiplier(2);
console.log(double); // 10

console.log(double(5)); // 10