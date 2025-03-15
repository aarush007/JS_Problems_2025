/**
 * sum(1)(2)(3)(4)...() ---> Return 10
 */

// Use when we have limited functions

let sum = function (x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
};

console.log(sum(1)(2)(3));

// Use when we the arguments are up to n

let multiply = function (x) {
  return function (y) {
    return y ? multiply(x * y) : x;
  };
};

console.log(multiply(1)(2)(3)(4)(5)());
