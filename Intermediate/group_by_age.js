const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 40 },
  { name: "Eve", age: 35 },
  { name: "Frank", age: 30 },
  { name: "Grace", age: 28 },
  { name: "Hannah", age: 40 },
];

const groupByAge = people.reduce((acc, person) => {
  const { age } = person;
  if (!acc[age]) {
    acc[age] = [];
  }
  acc[age].push(person);
  return acc;
}, {});

console.log(groupByAge);
