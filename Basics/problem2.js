// Approach 1

function findLargestNumber() {
  let num1 = +prompt("Enter 1st number");
  let num2 = +prompt("Enter 2nd number");
  let num3 = +prompt("Enter 3rd number");

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Please enter a valid number");
    return;
  }

  let largest;
  if (num1 >= num2 && num1 >= num3) {
    largest = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
  } else {
    largest = num3;
  }

  alert(`The largest number is ${largest}`);
}

findLargestNumber();

// Approach 2

function findLargestNumber() {
  let num1 = +prompt("Enter 1st number");
  let num2 = +prompt("Enter 2nd number");
  let num3 = +prompt("Enter 3rd number");

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Please enter a valid number");
    return;
  }

  let largest = Math.max(num1, num2, num3);
  alert(`The largest number is ${largest}`);
}

findLargestNumber();

// Approach 3

function findLargestNumber() {
  let numbers = [
    Number(prompt("Enter 1st number")),
    Number(prompt("Enter 2nd number")),
    Number(prompt("Enter 3rd number")),
  ];

  if (numbers.some(isNaN)) {
    alert("Please enter a valid number");
    return;
  }

  let largest = Math.max(...numbers);
  alert(`The largest number is ${largest}`);
}

findLargestNumber();

// Approach 4

function findLargestNumber() {
  let numbers = [
    Number(prompt("Enter 1st number")),
    Number(prompt("Enter 2nd number")),
    Number(prompt("Enter 3rd number")),
  ];

  if (numbers.some(isNaN)) {
    alert("Please enter a valid number");
    return;
  }

  let largest = numbers.sort((a, b) => b - a)[0];
  alert(`The largest number is ${largest}`);
}

findLargestNumber();

// Approach 5

function findLargestNumber() {
  let numbers = [
    Number(prompt("Enter 1st number")),
    Number(prompt("Enter 2nd number")),
    Number(prompt("Enter 3rd number")),
  ];

  if (numbers.some(isNaN)) {
    alert("Please enter a valid number");
    return;
  }

  let largest = numbers.reduce((max, current) =>
    current > max ? current : max
  );
  alert(`The largest number is ${largest}`);
}

findLargestNumber();
