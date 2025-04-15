const sentence = "Hello Ashutosh, Have a good day!";
const words = sentence.split(" ");
let index = 0;

const intervalId = setInterval(() => {
  if (index < words.length) {
    console.log(words[index]);
    index++;
  } else {
    clearInterval(intervalId);
    console.log(sentence);
  }
}, 1000);
