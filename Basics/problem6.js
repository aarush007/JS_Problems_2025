function getDayName() {
  let dayNumber = Number(prompt("Enter day number between 1 to 7"));

  if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
    alert("Please enter the number between 1 to 7");
    return;
  }

  let dayName;
  switch (dayNumber) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    case 7:
      dayName = "Sunday";
      break;
    default:
      dayName = "Enter valid number";
  }
  alert(`The day corresponding to number ${dayNumber} is ${dayName}`);
}

getDayName();
