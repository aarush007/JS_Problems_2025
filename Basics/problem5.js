function calculateNetAmount() {
  let grossAmount = Number(prompt("Enter the gross amount"));

  if (isNaN(grossAmount) || grossAmount < 0) {
    alert("Please enter valid positive number");
    return;
  }

  let discountRate = 0;
  if (grossAmount > 5000) {
    discountRate = 10;
  } else if (grossAmount > 2000) {
    discountRate = 5;
  }

  let discountAmount = (grossAmount * discountRate) / 100;
  let netAmount = grossAmount - discountAmount;

  alert(
    `Gross Amount: ${grossAmount} \nDiscount Rate: ${discountRate}% \nNet Amount: ${netAmount}`
  );
}

calculateNetAmount();
