//module handling
//for import in nodejs we use require 
const {add} = require("./math") //1: if i am calling the function directly i will use this syntax

console.log("the math value is : ", add(5,6)); //1: this is how i will console log it

const math = require("./math") //2: if i am calling the function directly i will use this syntax

console.log("the math value is : ", math.mul(5,6)); //2: this is how i will console log it
