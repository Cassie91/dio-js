// Javascript Structures
// ----------------------------------------------------------------------------------------
// Conditional structures > Instructions to do specific things based on a condition, wheter decision or repetition

// Decision structures

// var player1 = 0;
// var player2 = 1;
// var score;

// -------------------

//If & Else

// player1 != -1 && player2 != -1 ? console.log(`The score is valid, let's play!`) : console.log('Invalid score. Please, check it!')


// if (player1 > 0 && player2 == 0) {
//     console.log("Player one scored!")
//     score = player1 > player2
//   } else if (player2 > 0 && player1 == 0) {
//     console.log("Player two scored!")
//     score = player2 > player1
//   } else {
//     console.log("No one scored.")
//   }

// -----

//Switch case
// switch (score) {
//   case score = player1 > player2:
//     console.log("Player 1 wins! Congratulations :)")
//     break;
//   case score = player2 > player1:
//     console.log("Player 2 wins! Congratulations :)")
//     break;
//   default:
//     console.log("No one won :(")
// }

// ----------------------------------------------------------------------------------------

// Loop structures

let array = ['value1', 'value2', 'value3', 'value4', 'value5', ]

let object = { property1: 'value1' , property2: 'value2', property3: 'value3', }

// -------------------

// For: Loop a instruction until it became false.
// for (let index = 0; index < array.length; index++) {
//   console.log(index);
// }

// --------

// For in: Similar to "For", but loop over the properties of an array/object. Obs: It will turn in a string.

//array
// for (let i in array) {
//   console.log(i);
// }

//object
// for (i in object) {
//   console.log(i);
// }

// --------

// For of: Executes a loop that operates on a sequence of values sourced from an iterable object
// for (i of object.property1) {
//   console.log(i)
// }

// --------

// While: Creates a loop that executes a specified statement as long as the test condition evaluates to true
// var a = 0;

// while (a < 100) {
//   a++
//   if (a%2 == 0) {
//     console.log(a)
//   }
// }

// do {
//   a++
//   console.log(a)
// } while (a<10)