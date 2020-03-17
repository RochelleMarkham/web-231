/*====================================
;Title: Exercise 5.2
;Author: Professor Krasso
;Date: 18 March 2020
;Modified by: Rochelle Markham
;Description: ES5 Built-in functions
;=====================================
*/

//links the header program to the current program
const header = require('../Markham-header.js');

//arguments for the header program
console.log(header.display("Rochelle", "Markham", "Exercise 5.2"));

//new line
console.log("\n");

//creates a string array
const favFood = ['pizza', 'hummus', 'sweets', 'veggies', 'cake'];

//loops through array and prints each element
favFood.forEach(function(food) {console.log(food)});
