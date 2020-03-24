/*====================================
;Title:Exercise 6.2
;Author: Professor Krasso
;Date: 23 March 2020
;Modified by: Rochelle Markham
;Description: Exception Handling
;=====================================
*/

//links the header program to the current program
const header = require('../Markham-header.js');

//arguments for the header program
console.log(header.display("Rochelle", "Markham", "Exercise 6.2") + "\n");

try {
  //declare variables
  let x = 55;
  let y = 51;
  const sum = y + x;
  // if statement
  if (sum > 100) throw 'Error! Sum is greater than 100';
  // print the sum
  console.log(sum);
} catch (err) {
  console.log('Catch clause: ' + err)
} finally {
  console.log('Finally clause reached...')
}

/*
  Expected output:
  Catch clause: <your custom message goes here>
  Finally clause reached...
*/

