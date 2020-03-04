/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/

const header = require('../Markham-header.js');

console.log(header.display("Rochelle", "Markham", "Exercise 3.3"));

let eventKeyCode = 13;

 switch(eventKeyCode){
  case (13):
    console.log('The enter key was pressed.');
    break;
  case (16):
    console.log('The shift key was pressed.');
    break;
  case (32):
    console.log('The spacebar key was pressed.');
    break;
  case (8):
    console.log('The backspace / delete key was pressed.');
    break;
  default:
    console.log('Unrecognized key.');
 }
