//  Primitive  DataTyepes

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// both will give different results/unique values
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive DataTypes) \\

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];  //array

// object
let myObj = {
    name: "hitesh",
    age: 22,
}

//fuction
const myFunction = function(){
    console.log("Hello world");
}


console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3