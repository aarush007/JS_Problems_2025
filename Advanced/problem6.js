const employees = [
    { id: 1, name: "John", department: "Engineering", salary: 80000 },
    { id: 2, name: "Alice", department: "HR", salary: 50000 },
    { id: 3, name: "Bob", department: "Engineering", salary: 90000 },
    { id: 4, name: "David", department: "Sales", salary: 60000 },
    { id: 5, name: "Emma", department: "Engineering", salary: 85000 },
    { id: 6, name: "Mike", department: "Sales", salary: 75000 },
    { id: 7, name: "Sarah", department: "HR", salary: 65000 },
];

function groupEmployeesByDepartment(employees) {
    const result = employees.reduce((acc, employee) => {
        const { name, department, salary } = employee;

        if (!acc[department]) {
            acc[department] = {
                count: 0,
                totalSalary: 0,
                highestPaid: null,
                highestSalary: 0,
            }
        }

        acc[department].count++;
        acc[department].totalSalary += salary;

        if (salary > acc[department].highestSalary) {
            acc[department].highestSalary = salary;
            acc[department].highestPaid = name;
        }


        return acc;
    }, {});

    for (const dept in result) {
        result[dept].averageSalary = result[dept].totalSalary / result[dept].count;

        delete result[dept].highestSalary;
    }

    return result;
}

console.log(groupEmployeesByDepartment(employees));