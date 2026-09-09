function mostOccuringChar(str) {
    let count = {};
    let maxCount = 0;
    let maxChar = '';

    for (let char of str) {
        count[char] = (count[char] || 0) + 1;

        if (count[char] > maxCount) {
            maxCount = count[char];
            maxChar = char;
        }
    }
    return maxChar;
}

console.log(mostOccuringChar('hello'));
