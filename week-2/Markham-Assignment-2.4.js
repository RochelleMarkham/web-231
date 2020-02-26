/*
============================================
; Title: Markham Assignment 2.4
; Author: Professor Krasso
; Date: 26 February 2020
; Modified By: Rochelle Markham
; Description: Demonstrates basic functions
;===========================================
*/

//links the header program to the current program
const header = require('../Markham-header.js');

//arguments for the header function
console.log(header.display("Rochelle", "Markham", "Assignment 2.4"));

//Params: 2 string values
//Response: concatenated string
//Description: returns the first name and the last name together,
//to form the full name
function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

//Expected output: "Hello my name is Rochelle Markham!"
console.log("\nHello my name is " + fullName("Rochelle", "Markham") + "!");

//Params: 3 numerical values
//Response: Date
//Description: returns input in the form of a date
//Expected output month/day/year
function dateWriter(year, month, day){
  return new Date(year, month, day);
}

//Params: 2 numerical values
//Response: Number
//Description: Rounds input number to input number of decimal places
function formatNumber(number, numOfFixedPositions){
  return number.toFixed(numOfFixedPositions);
}

//Expected output: Today's date is 2/26/2020 and the current temperature is 33.6 degrees.
console.log("Today's date is " + dateWriter(2020, 1, 26).toLocaleDateString() + " and the current temperature is "
     + formatNumber(33.63243, 1) + " degrees.")

//Params: 1 string value
//Response: Number
//Description: Converts a number that has been entered as a string value
//into a numerical value and then omits any decimal places
function convertToInt(stringParam1){
  return parseInt(stringParam1);
}

//Params: 1 string value
//Response: number
//Description: Converts a number that has been entered as a string value
//into a numerical value and then returns it with decimal places
function convertToFloat(stringParam2){
  return parseFloat(stringParam2);
}

//Expected output: I am 34 years old and my savings account goal is $5000.25.
console.log("I am " + convertToInt("34.75") + " years old and my savings account goal is $" + convertToFloat("5000.25") + ".");
