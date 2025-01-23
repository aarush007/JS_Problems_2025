function calculateElectricityBill() {
  let units = Number(prompt("Enter the number of electricity units consumed"));

  if (isNaN(units) || units < 0) {
    alert("Please enter valid units");
    return;
  }

  let bill = 0;

  if (units <= 100) {
    bill = units * 2;
  } else if (units <= 200) {
    bill = 100 * 2 + (units - 100) * 3;
  } else {
    bill = 100 * 2 + 100 * 3 + (units - 200) * 5;
  }

  alert(`Total electricity bill: ${bill}`);
}

calculateElectricityBill();
