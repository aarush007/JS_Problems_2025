// Approach 1

const arr = [2, 3, 6, 8, 19, 78, 67, 43];

const output = arr.sort((a, b) => b - a)[1];
console.log(output);

// Approach 2

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of arr) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

console.log(secondLargest);