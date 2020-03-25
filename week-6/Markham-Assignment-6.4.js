/*====================================
;Title:Assignment 6.4
;Author: Professor Krasso
;Date: 24 March 2020
;Modified by: Rochelle Markham
;Description: Nested Object Literals
;=====================================
*/

//links the header program to the current program
const header = require('../Markham-header.js');

//arguments for the header program
console.log(header.display("Rochelle", "Markham", "Assignment 6.4") + "\n");

//variable assignment to produce current Date
var today = new Date();

// ticket object with ticket details and nested person object
const ticket = {
  id: 105,
  name: "Rochelle Markham",
  dateCreated: today.toLocaleDateString(),
  priority: "high",
  // nested person object with personal details
  person: {
    id: 502,
    firstName: "Bob",
    lastName: "Jones",
    jobTitle: "Programmer I",
  }
}

// prints ticket details
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated +
    " and assigned to employee " + ticket.person.firstName +" " + ticket.person.lastName
    + " (" + ticket.person.jobTitle + ").")
