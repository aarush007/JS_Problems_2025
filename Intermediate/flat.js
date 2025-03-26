// Approach 1

const nestedArray = [1, [2, 3], [4, [5, 6]], 7];

const flatArray = nestedArray.flat(Infinity);
console.log(flatArray);

// Approach 2

function flattenArray(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    []
  );
}

console.log(flattenArray(nestedArray));
