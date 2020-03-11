/*====================================
;Title: Assignment 4.4
;Author: Professor Krasso
;Date: 11 March 2020
;Modified by: Rochelle Markham
;Description: Using Predicates
;=====================================
*/

//links the header program to the current program
const header = require('../Markham-header.js');

//arguments for the header program
console.log(header.display("Rochelle", "Markham", "Assignment 4.4"));

//new line
console.log("\n");

//set array elements to the states array
var states = ["Missouri", "Florida", "Louisiana", "California", "Hawaii"];

//params: 2 string values
//output: boolean
//returns true or false depending on equality of parameters
function getState(string1, string2){
 if (string1===string2)
    return true;
  else
    return false;
}

//prints list of items from the array of states
console.log("--ORIGINAL ARRAY--")
for (var x = 0; x < states.length; x++){
  console.log(states[x]);
}

//new line
console.log("\n");

//sorts the states by alphabetical order and prints
console.log("--SORTED ARRAY--");
(states.sort().forEach(state => console.log(state)));

//new line
console.log("\n");

//returns a selected value from the array
console.log("--SELECTED VALUE--");
console.log(
  states.filter
    (function(inputState){
      return getState(inputState, "Hawaii")
    }
  )[0]
);
