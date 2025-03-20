const input = document.getElementById("input");
let timer;

const getResults = () => {
  console.log("Fetching results for the entered keys: ", input.value);
};

const handleKeyUp = () => {
  //   console.log("Keys pressed: ", input.value);
  debounceHOF(getResults, 3000);
};

const debounceHOF = (fn, delay) => {
  if (timer) clearTimeout(timer);

  timer = setTimeout(() => {
    fn();
  }, delay);
};

input.addEventListener("keyup", handleKeyUp);
