/*====================================
;Title: Exercise 4.3
;Author: Professor Krasso
;Date: 11 March 2020
;Modified by: Rochelle Markham
;Description: Filtering arrays
;=====================================
*/

//links the header program to the current program
const header = require('../Markham-header.js');

//arguments for the header program
console.log(header.display("Rochelle", "Markham", "Exercise 4.3"));

//new line
console.log("\n");

//array of strings
var vehicles = ["car", "van", "airplane", "bicycle", "scooter"];

//displays array items
console.log("--DISPLAYING ARRAY ITEMS--");
for (var x = 0; x < vehicles.length; x++){
  console.log(vehicles[x]);
}

//params: array, string
//output: array element
//returns a specified array element
function getValue(array, string){
  for (var x = 0; x < array.length; x++) {
    if (array[x] === string) {
      return array[x];
    }
  }
}

//new line
console.log("\n");

//outputs selected element
console.log(" -- SELECTED VALUE --");
console.log(getValue(vehicles, "scooter"));

//new line
console.log("\n");

//outputs selected element
console.log(" -- SELECTED VALUE --");
console.log(getValue(vehicles, "van"));
