// Approach 1

function reverseStr(str) {
  let reverse = "";
  for (i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

console.log(reverseStr("Hello World"));

// Approach 2

let str = "Hello World";
let reverseStr = str.split("").reverse().join("");
console.log(reverseStr);
