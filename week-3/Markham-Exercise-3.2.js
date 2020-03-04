/*====================================
;Title: Exercise 3.2
;Author: Professor Krasso
;Date: 3 March 2020
;Modified by: Rochelle Markham
;Description: Brief example of using
;the switch control structure
;=====================================
*/

//links the header program to the current program
const header = require('../Markham-header.js');

//arguments for the header function
console.log(header.display("Rochelle", "Markham", "Exercise 3.2"));

//test variable declarations
var varOne = "Truck";
var varTwo = "Car";

var varThree = "Bike";
var varFour = "Bike";

var varFive = "Four";
var varSix = "Three";

//params: 2 values of any type
//response: Boolean
//description: returns true or false depending on
//whether two input values match
function match(valOne, valTwo){
    if (valOne === valTwo)
      return true
    else
      return false
}

//checks the match function for equality
console.log(match("dog", "cat"));
console.log(match("Cat", "Cat"));

//params: any two values
//response: string
//Description: checks arguments for equality and
//returns a string if the arguments don't match
function logMismatch(param1, param2){
  console.log(param1 + " and " + param2 + " do not match!")
}

//params: any 2 values
//response: string
//description: checks arguments for equality and
//returns a string if the arguments match
function logMatch(param3, param4){
  console.log(param3 + " and " + param4 + " do match!")
}

//Testing 2 input variables to check for equality using
//the match function. If the two match, a string is returned
//stating the 2 match. If they don't match, a string is
//returned stating that they don't match
if (match(varOne, varTwo)){
  logMatch(varOne, varTwo);
}else{
  logMismatch(varOne, varTwo);
}

if (match(varThree, varFour)){
  logMatch(varThree, varFour);
}else{
  logMismatch(varThree, varFour);
}

if (match(varFive, varSix)){
  logMatch(varFive, varSix);
}else{
  logMismatch(varFive, varSix);
}
