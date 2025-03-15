/**
 * call, apply and bind works on function borrowing concept.
 * call- (this, arg1, arg2...) - immediately invoked
 * apply- (this, [arg1, arg2, ...]) - immediately invoked
 * bind- similar to call method but it creates a copy of the function which can be invoked later
 */

let name = {
  firstname: "Ashutosh",
  lastname: "Kumar",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + ", " + state
  );
};

let name2 = {
  firstname: "Sourav",
  lastname: "Ganguly",
};

let name3 = {
  firstname: "Amitabh",
  lastname: "Bachchan",
};

let name4 = {
  firstname: "Sunil",
  lastname: "Chhetri",
};

printFullName.call(name, "Deoghar", "Jharkhand");
printFullName.call(name2, "Kolkata", "West Bengal");

printFullName.apply(name3, ["Allahabad", "Uttar Pradesh"]);

let printMyName = printFullName.bind(name4, "Secundarabad", "Andhra Pradesh");
console.log(printMyName); // Return a copy of the function printFullName
printMyName();
