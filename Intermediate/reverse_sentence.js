// Approach 1

function reverseSentence(sentence) {
  let reverse = [];
  let words = sentence.split(" ");
  for (i = words.length - 1; i >= 0; i--) {
    reverse.push(words[i]);
  }
  return reverse.join(" ");
}

console.log(reverseSentence("India is the best"));

// Approach 2

let sentence = "India is the best";
let reverseSentence = sentence.split(" ").reverse().join(" ");
console.log(reverseSentence);
