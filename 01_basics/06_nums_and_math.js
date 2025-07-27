const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);      // this is how we can convert the number to string and get the length of the string

// console.log(balance.toFixed(1));        // this is how we can convert the number to string with fixed decimal places

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));   // this is how we can convert the number to string with specified precision  

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));     // this is how we can convert the number to string with locale formatting  







// +++++++++++++ Maths +++++++++++++++++++++++++++++





// console.log(Math);     
// console.log(Math.abs(-4));      // this is how we can get the absolute value of a number

// console.log(Math.round(4.6));     // this is how we can round a number to the nearest integer

// console.log(Math.ceil(4.2));      // this is how we can round a number up to the nearest integer

// console.log(Math.floor(4.9));      // this is how we can round a number down to the nearest integer 

// console.log(Math.min(4, 3, 6, 8));     // this is how we can find the minimum value from a set of numbers

// console.log(Math.max(4, 3, 6, 8));        // this is how we can find the maximum value from a set of numbers

console.log(Math.random());               // this is how we can generate a random number between 0 and 1

console.log((Math.random()*10) + 1);        // this is how we can generate a random number between 1 and 10   

console.log(Math.floor(Math.random()*10) + 1);    // this is how we can generate a random integer between 1 and 10          

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)     // this is how we can generate a random integer between min and max (inclusive)