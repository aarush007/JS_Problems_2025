// Approach 1

function showRating(rating) {
    return '*'.repeat(rating);
}

console.log(showRating(5));

// Approach 2

function showRating2(rating) {
    let result = '';
    for (let i = 1; i <= rating; i++) {
        result += '*';
    }
    return result;
}

console.log(showRating2(7));