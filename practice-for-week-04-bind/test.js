// Your code here
const Employee = require("./employee");
let john = new Employee("John Wick", "Dog Lover");

setTimeout(john.sayName, 2000)

setTimeout(john.sayName.bind(john), 2000);

setTimeout(john.sayOccupation, 3000);

setTimeout(john.sayOccupation.bind(john), 3000);
