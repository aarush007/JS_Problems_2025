// Approach 1

function calculateGrade() {
  let eng = +prompt("Enter marks in English");
  let math = +prompt("Enter marks in Math");
  let comp = +prompt("Enter marks in Computer");

  if (isNaN(eng) || isNaN(math) || isNaN(comp)) {
    alert("Please enter valid marks");
    return;
  }

  let avg = (eng + math + comp) / 3;
  let grade;

  if (avg > 60) {
    grade = "First";
  } else if (avg > 50) {
    grade = "Second";
  } else if (avg > 30) {
    grade = "Pass";
  } else grade = "Fail";

  alert(`Average Marks: ${avg.toFixed(2)} \nGrade: ${grade}`);
}

calculateGrade();

// Approach 2

function calculateGrade() {
  let eng = +prompt("Enter marks in English");
  let math = +prompt("Enter marks in Math");
  let comp = +prompt("Enter marks in Computer");

  if (isNaN(eng) || isNaN(math) || isNaN(comp)) {
    alert("Please enter valid marks");
    return;
  }

  let avg = (eng + math + comp) / 3;
  let gradeMap = {
    first: avg > 60,
    second: avg > 50,
    pass: avg > 30,
    fail: avg < 30,
  };

  let grade = Object.keys(gradeMap).find((key) => gradeMap[key]);
  alert(
    `Average Marks: ${avg.toFixed(2)} \nGrade: ${
      grade.charAt(0).toUpperCase() + grade.slice(1)
    }`
  );
}

calculateGrade();
