// Approach 1

function firstNonRepeatingChar(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}

console.log(firstNonRepeatingChar("aabbccdeff"));

// Approach 2

function firstNonRepeatingChar2(str) {
  let count = {};

  for (let char of str) {
    count[char] = (count[char] || 0) + 1
  }

  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }
  return null;
}

console.log(firstNonRepeatingChar2('racecar'));