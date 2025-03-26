// Approach 1

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 4, 5, 2, 3, 4, 1, 6, 7, 10]));

// Approach 2

function removeDuplicates(arr) {
  let unique = {};
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (!unique[arr[i]]) {
      unique[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 3, 3, 2, 1, 5]));
