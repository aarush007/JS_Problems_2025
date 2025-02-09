const arr = [1, 2, 3, 4, 5];

const double = function (num) {
  return num * 2;
};

const triple = function (num) {
  return num * 3;
};

const binary = function (num) {
  return num.toString(2);
};

Array.prototype.calculate = function (callbackFn) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(callbackFn(this[i]));
  }
  return output;
};

console.log(arr.calculate(double));
console.log(arr.calculate(triple));
console.log(arr.calculate(binary));

console.log(arr.map(double));
