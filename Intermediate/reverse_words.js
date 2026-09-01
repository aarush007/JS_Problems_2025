// Approach 1

function reverseWords(sentence) {
    const words = sentence.split(' ');
    const result = [];

    for (let i = 0; i < words.length; i++) {
        const reversedWord = words[i].split('').reverse().join('');
        result.push(reversedWord);
    }
    return result.join(' ');
}

console.log(reverseWords('I am the Best')); // Output: 'I ma eht tseB'

// Approach 2

function reverseWordSentence(sentence) {
    const words = sentence.split(' ');
    const output = [];

    for (let i = 0; i < words.length; i++) {
        let reverseWord = '';
        for (let j = words[i].length - 1; j >= 0; j--) {
            reverseWord += words[i][j];
        }
        output.push(reverseWord);
    }
    return output.join(' ');
}

console.log(reverseWordSentence('I am the Best')); // Output: 'I ma eht tseB'