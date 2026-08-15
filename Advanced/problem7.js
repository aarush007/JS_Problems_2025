let employee1 = {
    name: "Rahul",
    role: "Developer"
};

let employee2 = {
    name: "Priya",
    role: "Designer"
};

let employee3 = {
    name: "Amit",
    role: "Manager"
};

let introduce = function (company, district) {
    console.log(this.name + ' is a ' + this.role + ' at ' + company + ' in ' + district);
}

introduce.call(employee1, "Google", "Bangalore");
introduce.apply(employee2, ["Microsoft", "Hyderabad"]);

let myIntroduction = introduce.bind(employee3, "Amazon", "Mumbai");
myIntroduction();