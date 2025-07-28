// Immediately Invoked Function Expressions (IIFE)

// An IIFE is a function that runs as soon as it is defined.
// It is a common JavaScript design pattern to avoid polluting the global scope.
// It can be used to encapsulate code and create private variables.
// IIFE can be anonymous or named.
// It can also take parameters.

// Syntax: (function()) { /* code */ })();

// Example of an IIFE
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// IIFE with parameters and without a name  
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('devraj');
