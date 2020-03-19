/*====================================
;Title: Assignment 5.4
;Author: Professor Krasso
;Date: 18 March 2020
;Modified by: Rochelle Markham
;Description: Object Collections
;=====================================
*/

//links the header program to the current program
const header = require('../Markham-header.js');

//arguments for the header program
console.log(header.display("Rochelle", "Markham", "Assignment 5.4") + "\n");

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

// return a new list of objects with only name and rating fields
var compRating = famousComposers.map(function(composer){
  return [composer.rating, composer.firstName, composer.lastName]
})

// prints list of composer names and ratings
console.log('-- COMPOSER BY RATING --')
index = 1
//param: an array
//output: selected array elements
//uses only certain values from the original array to create a new array
compRating.forEach(function([value1, value2, value3]){
  console.log("Rating: " + value1 + "\nComposer: " + value2 + " " + value3 +"\n");
})
index++

// return a new list of objects with only name and genre fields
var compGenre = famousComposers.map(function(composer){
  return [composer.genre, composer.firstName, composer.lastName]
})

// prints list of composer names and genres
console.log('-- COMPOSER BY GENRE --')
index = 1
//param: an array
//output: selected array elements
//uses only certain values from the original array to create a new array
compGenre.forEach(function([value1, value2, value3]){
  console.log("Genre: " + value1 + "\nComposer: " + value2 + " " + value3 +"\n");
})
index++
