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
