/*====================================
;Title: Exercise 5.3
;Author: Professor Krasso
;Date: 18 March 2020
;Modified by: Rochelle Markham
;Description: Object Collections
;=====================================
*/

//links the header program to the current program
const header = require('../Markham-header.js');

//arguments for the header program
console.log(header.display("Rochelle", "Markham", "Exercise 5.3"));

//new line
console.log("\n");

//creates an array of objects with 4 fields
var famousComposers = [
  {firstName: 'Ludwig',
   lastName: 'van Beethoven',
   genre: 'Classical',
   rating: '8',
  },

  {firstName: 'Wolfgang',
   lastName: 'Mozart',
   genre: 'Classical',
   rating: '10',
  },

  {firstName: 'Johann',
   lastName: 'Bach',
   genre: 'Classical',
   rating: '9',
  },

  {firstName: 'Joseph',
   lastName: 'Haydn',
   genre: 'Classical',
   rating: '6',
  },

  {firstName: 'Franz',
   lastName: 'Schubert',
   genre: 'Classical',
   rating: '5',
  },
  ];

  //heading for output
  console.log("--COMPOSERS--");

  //param: the array
  //output: string
  //loops through the array printing each field for each "element"
  famousComposers.forEach(function(composer) {console.log("First name: " + composer.firstName +
    ", Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating)});
