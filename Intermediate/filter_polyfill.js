const arr = [2, 4, 6, 8, 7, 11];

const filterSix = function (num) {
  return num > 6;
};

const filterEight = function (num) {
  return num > 8;
};

Array.prototype.calculate = function (callbackFn) {
  const output = [];
  this.forEach((ele) => {
    if (callbackFn(ele)) {
      output.push(ele);
    }
  });
  return output;
};

console.log(arr.calculate(filterSix));
console.log(arr.calculate(filterEight));

console.log(arr.filter(filterSix));
