const button = document.getElementById("btn");

let count = 0;
let isThrottled;

const sendEmail = () => {
  console.log("Email sent");
};

const handleClick = () => {
  console.log("Forgot Password Button Clicked", count++);
  throttleHOF(sendEmail, 3000);
  //   setTimeout(() => {
  //     console.log("Email sent");
  //   }, 3000);
};

const throttleHOF = (fn, delay) => {
  if (isThrottled) return;
  isThrottled = true;
  setTimeout(() => {
    fn();
    isThrottled = false;
  }, delay);
};

button.addEventListener("click", handleClick);
