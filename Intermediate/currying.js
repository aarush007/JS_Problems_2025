/**
 * The concept of breaking a function with multiple arguments into multiple functions with single argument each in such a way that the output is same is called Currying. We can achieve it using bind or, closure.
 */

let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

let add = function (x) {
  return function (y) {
    console.log(x + y);
  };
};

let additionByTwo = add(2);
additionByTwo(6);

let additionByThree = add(3);
additionByThree(15);
