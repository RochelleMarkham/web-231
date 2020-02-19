/*======================================
; Title: Assignment 1-5
; Author: Rochelle Markham
; Date: 19 Feb 2020
; Description: This is a basic program
; displaying employee information using
; types, values and variables
========================================
*/

var firstOne = "Robert";                //first name variable declarations
var firstTwo = "Rebecca";
var firstThree = "Rene";

var lastOne = "Russo";                  //last name variable declarations
var lastTwo = "Richards";
var lastThree = "Ross";
var addOne = "1234 Rice Rd. \nAnywhere, USA 12345";       //Address variable declarations
var addTwo = "2345 Round St. \nAnywhere, USA 23456";
var addThree = "3456 Rodeo Ln. \nAnywhere, USA 34567";

var payOne = 12.50;                    //pay rate variable declarations 
var payTwo = 13.00;
var payThree = 12.75;

var hireOne = new Date(2019, 4, 2);    //hire date variable declarations
var hireTwo = new Date(2018, 9, 21);
var hireThree = new Date(2019, 1, 16);
                                                                                //Employees 1, 2 & 3
console.log(firstOne + " " + lastOne + '\n'+ addOne + '\n' + "$"                //Expected Output:
    + payOne.toFixed(1) + '\n' + hireOne.toLocaleDateString()+ '\n');           //First Name
                                                                                //Address Line 1
console.log(firstTwo + " " + lastTwo + '\n'+ addTwo + '\n' + "$"                //Address Line 2
    + payTwo.toFixed(1) + '\n' + hireTwo.toLocaleDateString()+ '\n');           //$Pay Rate
                                                                                //Hire Date x/x/xxxx
console.log(firstThree + " " + lastThree + '\n'+ addThree + '\n' + "$" 
    + payThree.toFixed(1) + '\n' + hireThree.toLocaleDateString()+ '\n');       