// Approach 1

function sumOfDigits(arr) {
  let sum = 0;
  for (let num of arr) {
    let digits = num.toString().split("");
    for (let digit of digits) {
      sum += parseInt(digit, 10);
    }
  }
  console.log(`The sum of all digits is: ${sum}`);
}

let numbers = [123, 45, 67, 890];
sumOfDigits(numbers);

// Approach 2

const arr = [123, 67, 89, 345];

const output = arr.reduce((acc, curr) => {
  return (
    acc +
    curr
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0)
  );
}, 0);

console.log(output);
