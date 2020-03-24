/*====================================
;Title:Exercise 6.3
;Author: Professor Krasso
;Date: 24 March 2020
;Modified by: Rochelle Markham
;Description: Object Literals
;=====================================
*/

//links the header program to the current program
const header = require('../Markham-header.js');

//arguments for the header program
console.log(header.display("Rochelle", "Markham", "Exercise 6.3") + "\n");

//sets a variable with 3 different sets of data
var ticket = {
  id : 101,
  name: "Help Desk Support",
  requester: "Bob Jones",
}

//print information as a string
console.log("{id: " + ticket.id + ", name: " + ticket.name + ", requester: " + ticket.requester + "}");

//could also be printed this way, in a similar fashion
console.log(JSON.stringify(ticket));
