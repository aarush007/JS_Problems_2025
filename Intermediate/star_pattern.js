function starPattern(number) {
    let result = '';

    for (let i = 1; i <= number; i++) {
        let stars = '';
        for (let j = 1; j <= i; j++) {
            stars += '*';
        }
        result += stars + '\n';
    }
    return result;
}

console.log(starPattern(5));
