// Approach 1

function checkEvenOrOdd() {
  let userInput = prompt("Enter a number");
  let number = parseInt(userInput, 10);

  if (isNaN(number)) {
    alert("Please enter a valid number");
    return;
  } else if (number % 2 === 0) {
    alert(`${number} is Even number`);
  } else alert(`${number} is Odd number`);
}
checkEvenOrOdd();

// Approach 2

function checkEvenOrOdd() {
  let userInput = prompt("Enter a number");
  let number = Number(userInput);

  if (isNaN(number)) {
    alert("Please enter a valid number");
    return;
  } else {
    alert(`${number} is ${number % 2 === 0 ? "Even" : "odd"} number`);
  }
}

checkEvenOrOdd();

// Approach 3

function checkEvenOrOdd() {
  let userInput = prompt("Enter a number");
  let number = +userInput;

  if (isNaN(number)) {
    alert("Please enter a valid number");
    return;
  } else {
    alert(`${number} is ${number % 2 === 0 ? "Even" : "Odd"} number`);
  }
}

checkEvenOrOdd();
