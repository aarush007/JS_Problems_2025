/**
 * 'this' keyword behaves differently in strict mode and non-strict mode.
 */

// 'this' in global space

console.log(this); // globalObject - Window inside Browser

// 'this' inside a function

function x() {
  console.log(this); // Window or, undefined (strict mode)
}

x();

/**
 * 'this' inside non-strict mode (this substitution):-
 * If the value of 'this' is undefined or, null; 'this' will be replaced with globalObject during non-strict mode.
 *
 * The value of 'this' keyword depends on how the function is called.
 * If the function is called without any reference then it is undefined-
 * x()---> undefined
 *
 * When we call with a reference then it is window object-
 * window.x()---> Window Object
 *
 */

// 'this' inside a object's method

/**
 * A function defined inside an object is called method.
 *
 */

const obj = {
  a: 10,
  x: function () {
    console.log(this); // 'this' points to obj {a: 10, x: f}
    console.log(this.a); // 10
  },
};

obj.x();

// call, apply and bind method (Works on Function Borrowing concept)
