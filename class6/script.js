// Function types: Going deeper on the topic.
// ----------------------------------------------------------------------------

/* JavaScript functions are defined with the function keyword.
you can use a function declaration or a function expression. */

// ----------------------------------

//Function Declarations: Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).
// function hi(hello) {
//   console.log(hello)
// }
// hi('Hello, world!') < the function is called here.

// ---------------------

/* Function Expressions: A function expression can be stored in a variable and,
after a function expression has been stored in a variable, the variable can be used as a function: */

// var function1 = function() {
//   console.log('hello, world!')
// }

// function1();

// ----------------------------------

//Arrow function: Arrow functions allows a short syntax for writing function expressions.

// var function2 = () => {
//   console.log('Hello, world!')
// }

// function2();