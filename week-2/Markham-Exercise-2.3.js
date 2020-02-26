/*
============================================
; Title: Markham Exercise 2.3
; Author: Professor Krasso
; Date: 26 February 2020
; Modified By: Rochelle Markham
; Description: Demonstrates basic functions
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 2.3
  Today's Date

  Hello FirstName LastName!
*/

//links the header program to the current program
const header = require('../Markham-header.js');

//arguments for the header function
console.log(header.display("Rochelle", "Markham", "Exercise 2.3"));

//defining function to return my name
function myName(){
  return myName.rochelle;
};

//defining method on the myName function to display my name
myName.rochelle = "Rochelle";

//displays the text along with output from myName function
console.log('\n' + "Hello " + myName() + " Markham!");
