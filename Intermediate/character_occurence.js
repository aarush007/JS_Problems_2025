// Approach 1

function charactersOccurence(str) {
    let count = {};

    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }

    return count;
}

console.log(charactersOccurence('banana')); // { b: 1, a: 3, n: 2 }

// Approach 2

function specificCharacterOccurence(str, targetChar) {
    let count = 0;

    for (let char of str) {
        if (char === targetChar) {
            count++;
        }
    }
    return count;
}

console.log(specificCharacterOccurence('banana', 'a'));
