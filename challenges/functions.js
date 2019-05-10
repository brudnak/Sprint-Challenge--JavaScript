'use strict'
// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

const consume = (a, b, cb) => cb(a, b)

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = (a, b) => a + b

const multiply = (a, b) => a * b

const greeting = (firstName, lastName) => `Hello ${firstName} ${lastName}, nice to meet you!`

/* Step 3: Check your work by un-commenting the following calls to consume(): */

// 4
console.log(consume(2,2,add))

// 160
console.log(consume(10,16,multiply))

// Hello Margaret Hamilton, nice to meet you!
// https://en.wikipedia.org/wiki/Margaret_Hamilton_(scientist)
console.log(consume('Margaret', 'Hamilton', greeting))


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

// Because the variable internal is in one scope level "HIGHER"
// than the nestedFunction(). If there was a variable INSIDE 
// of nestedFunction() like: let name = 'Andrew'
// it would not be accessible to the myFunction() block of scope
// or the global scope, it would be contained inside of nestedFunction()

// - global scope
// - myFunction()
//      - variable "internal"
//      - nestedFunction()
//           - inside nested function: access to above variable possible

// See => Lexical scoping
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#Lexical_scoping


const external = 'I\'m outside the function'

function myFunction() {
  console.log(external)
  const internal = 'Hello! I\'m inside myFunction!'

  function nestedFunction() {
    console.log(internal)
  }
  nestedFunction()
}
myFunction()