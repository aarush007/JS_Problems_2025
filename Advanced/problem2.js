const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" }
];

const scores = [
    { id: 1, score: 95 },
    { id: 3, score: 88 },
    { id: 4, score: 70 }
];

const result = [];

for (const user of users) {
    let score = null;

    for (const item of scores) {
        if (user.id === item.id) {
            score = item.score;
            break;
        }
    }

    result.push({ ...user, score })
}

console.log(result);