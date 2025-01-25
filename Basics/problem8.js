// Approach 1

function countEvenNumbers(arr) {
  let output = arr.filter((num) => num % 2 === 0).length;
  alert(`The count of even numbers in the Array is ${output}`);
}

let numbers = [1, 2, 3, 4, 5, 6, 8, 10];
countEvenNumbers(numbers);

// Approach 2

function countEvenNumbers(arr) {
  let count = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      count++;
    }
  }
  alert(`The count of even numbers in the Array is ${count}`);
}

let numbers2 = [1, 2, 3, 4, 5, 6];
countEvenNumbers(numbers2);

// Approach 3

function countEvenNumbers(arr) {
  let count = 0;
  arr.forEach((num) => {
    if (num % 2 === 0) {
      count++;
    }
  });
  alert(`The count of even numbers in the Array is ${count}`);
}

let numbers3 = [2, 3, 4, 5, 6, 7, 8, 9, 1, 19];
countEvenNumbers(numbers3);

// Approach 4

function countEvenNumbers(arr) {
  let count = arr.reduce(
    (count, num) => (num % 2 === 0 ? count + 1 : count),
    0
  );
  alert(`The count of even numbers in the Array is ${count}`);
}

let numbers4 = [1, 4, 3, 5, 6, 7, 8, 9, 10];
countEvenNumbers(numbers4);
