function extractVowels(str) {
  let result = "";
  let vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      result += char;
    }
  }
  return result;
}

console.log(extractVowels("Hello World"));
