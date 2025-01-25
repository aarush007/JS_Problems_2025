// Approach 1

function printEvenNumbers(arr) {
  let evenNumbers = arr.filter((num) => num % 2 === 0);
  alert(`Even numbers in the array: ${evenNumbers}`);
}

let numbers = [13, 4, 54, 75, 9, 8];
printEvenNumbers(numbers);

// Approach 2

function printEvenNumbers(arr) {
  let evenNumbers = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }
  alert(`Even number in the array: ${evenNumbers}`);
}

let numbers1 = [3, 5, 98, 17, 4, 53];
printEvenNumbers(numbers1);

// Approach 3

function printEvenNumbers(arr) {
  let evenNumbers = [];
  arr.forEach((num) => {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  });
  alert(`Even numbers in the array: ${evenNumbers}`);
}

let numbers2 = [56, 3, 7, 63, 89, 86, 94];
printEvenNumbers(numbers2);
