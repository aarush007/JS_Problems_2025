let name = {
  firstname: "Ashutosh",
  lastname: "Kumar",
};

let name2 = {
  firstname: "Sanjay",
  lastname: "Samantra",
};

let printFullName = function (hometown, state, country) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " from " +
      hometown +
      ", " +
      state +
      " " +
      country
  );
};

Function.prototype.mybind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printFullName.mybind(name2, "Bangalore", "Karnataka");
printMyName2("India");

let printMyName = printFullName.bind(name, "Deoghar", "Jharkhand");
printMyName("India");
