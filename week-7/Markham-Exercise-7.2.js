/*====================================
;Title: Exercise 7.2
;Author: Professor Krasso
;Date: 30 March 2020
;Modified by: Rochelle Markham
;Description: Constructor Functions
;=====================================
*/

//links the header program to the current program
const header = require('../Markham-header.js');

//arguments for the header program
console.log(header.display("Rochelle", "Markham", "Exercise 7.2") + "\n");

//defines an Employee function with 4 different fields
function Employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

//sets previously defined values for 5 employees
var employees = [
  new Employee(1, "Thomas", "Edison", "Software Engineer"),
  new Employee(2, "Benjamin", "Franklin", "Programmer"),
  new Employee(3, "Nikola", "Tesla", "Project Manager"),
  new Employee(4, "Charles", "Babbage", "Product Manager"),
  new Employee(5, "Alexander", "Bell", "Business Analyst"),
];

//loops through the array to output the employees information
let index = 1
for (let x = 0; x < employees.length; x++) {
  console.log(employees[x].id + " " + employees[x].firstName + " " + employees[x].lastName + " " +
    employees[x].title)
  index++
}
