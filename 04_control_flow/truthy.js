const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}



//------------------falsy values-------------------\\
// false, 0, -0, BigInt 0n, "", null, undefined, NaN




//------------------truthy values------------------\\
// "0", 'false', " ", [], {}, function(){}





// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}




//------------Nullish Coalescing Operator (??): null undefined-----------\\

// The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or undefined.
// It is useful for providing default values when dealing with potentially null or undefined variables.
// It does not consider other falsy values like 0, false, or "".



// Example------------->
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20   //this will return 10 because the first null is replaced by 10, and the second ?? operator is ignored since the first operand is not null or undefined.

console.log(val1);




//-----------------------Terniary Operator------------------\\

// The ternary operator is a shorthand for an if-else statement.
// It takes three operands: a condition, a value if true, and a value if false.
// Syntax: condition ? valueIfTrue : valueIfFalse


// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")