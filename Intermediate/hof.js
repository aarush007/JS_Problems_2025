// Approach 1

const radius = [2, 4, 5, 8];

const calculateArea = function (arr) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(Math.PI * arr[i] * arr[i]);
  }
  return output;
};

console.log(calculateArea(radius));

const calculateCircumference = function (arr) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(2 * Math.PI * arr[i]);
  }
  return output;
};

console.log(calculateCircumference(radius));

const calculateDiameter = function (arr) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(2 * arr[i]);
  }
  return output;
};

console.log(calculateDiameter(radius));

// Approach 2 (Optimized with calculate as Higher order function having area, circumference and diameter as callback function)

const area = function (radius) {
  let result = Math.PI * radius * radius;
  return result.toFixed(2);
};

const circumference = function (radius) {
  let result = 2 * Math.PI * radius;
  return result.toFixed(2);
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (arr, property) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(property(arr[i]));
  }
  return output;
};

console.log(calculate([1, 2, 3, 4], area));
console.log(calculate([1, 2, 3, 4], circumference));
console.log(calculate([1, 2, 3, 4], diameter));
