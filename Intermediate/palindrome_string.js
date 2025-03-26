// Approach 1

function isPalindrome(str) {
  let reverseStr = str.split("").reverse().join("");
  if (str === reverseStr) {
    return true;
  }
  return false;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("ashutosh"));

// Approach 2

function isPalindrome(str) {
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("racecar"));
