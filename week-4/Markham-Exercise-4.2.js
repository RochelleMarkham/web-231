/*====================================
;Title: Exercise 4.2
;Author: Professor Krasso
;Date: 11 March 2020
;Modified by: Rochelle Markham
;Description: use an array with a
;function to return array values
;=====================================
*/

//links the header program to the current program
const header = require('../Markham-header.js');

//arguments for the header program
console.log(header.display("Rochelle", "Markham", "Exercise 4.2"));

//declares an array of strings
var fruit = ["apple", "orange", "banana", "mango", "pear"];

//params: array
//output: string values of the array
//function that can be passed an array & then iterates
//through the array and prints the elements
function getFruit(array){
  for(var x = 0; x < array.length; x++){
  console.log(array[x]);}
}

//applies declared array to the function
getFruit(fruit);
