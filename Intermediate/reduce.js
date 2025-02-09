// Sum of all the numbers present in an array

const arr = [2, 3, 4, 19, 76];

const output = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(output);

// Find the biggest number in an array

const numArr = [2, 4, 56, 87, 90];

const output1 = numArr.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, 0);

console.log(output1);

// Implementation of HOF in JSON Object

const users = [
  { firstName: "Amitabh", lastName: "Bachchan", age: 82 },
  { firstName: "Akshay", lastName: "Kumar", age: 57 },
  { firstName: "Govinda", lastName: "Ahuja", age: 61 },
  { firstName: "Madhuri", lastName: "Dixit", age: 57 },
];

// Get First name of each user
const output2 = users.map((user) => user.firstName);
console.log(output2);

// Get list of users who are above 60

const output3 = users.filter((user) => user.age > 60);
console.log(output3);

// Get count of users based on their age

const output4 = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age] + 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output4);

// Get Full name of user who are above 60

// Approach 1

const output5 = users
  .filter((user) => user.age > 60)
  .map((user) => user.firstName + " " + user.lastName);
console.log(output5);

// Approach 2

const output6 = users.reduce((acc, curr) => {
  if (curr.age > 60) {
    acc.push(curr.firstName + " " + curr.lastName);
  }
  return acc;
}, []);

console.log(output6);
