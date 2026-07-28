const employees = [
    { id: 1, name: "John", department: "Engineering", salary: 80000 },
    { id: 2, name: "Alice", department: "HR", salary: 50000 },
    { id: 3, name: "Bob", department: "Engineering", salary: 90000 },
    { id: 4, name: "David", department: "Sales", salary: 60000 },
    { id: 5, name: "Emma", department: "Engineering", salary: 85000 },
];

function groupEmployees() {
    const result = employees.reduce((acc, employee) => {
        const { department, salary } = employee;

        if (!acc[department]) {
            acc[department] = {
                count: 0,
                totalSalary: 0,
            };
        }

        acc[department].count++;
        acc[department].totalSalary += salary;

        return acc;
    }, {});

    for (const dept in result) {
        result[dept].averageSalary = result[dept].totalSalary / result[dept].count;
    }

    return result;
}

console.log(groupEmployees(employees));