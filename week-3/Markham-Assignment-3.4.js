/*====================================
;Title: Assignment 3.4
;Author: Professor Krasso
;Date: 4 March 2020
;Modified by: Rochelle Markham
;Description: a simple program
;demonstrating the use of loops
;=====================================
*/

//links the header program to the current program
const header = require('../Markham-header.js');

//arguments for the header program
console.log(header.display("Rochelle", "Markham", "Assignment 3.4"));

//variable declaration
var num = 6;

//Params: n/a
//Response: integer value
//Description: Returns a random integer value
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

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

//loop for 10 iterations
//compare random number to the input number
//if equal display "rand and num do match!"
//if not equal display "rand and num do not match!"
for (var x = 0; x < 10; x++) {
  var rand = randomNumber();
  if (match(rand, num)){
    logMatch(rand, num);
  }else{
    logMismatch(rand, num);
  }
}
