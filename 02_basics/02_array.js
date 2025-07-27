const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)       // this is how we can add an array to another array and returns the new length of the array and modifies the original array

// console.log(marvel_heros);        
// console.log(marvel_heros[3][1]);     //this is how we can access the second element of the added array   

// const allHeros = marvel_heros.concat(dc_heros)       // this is how we can concatenate two arrays and returns a new array without modifying the original arrays

// console.log(allHeros);   



const all_new_heros = [...marvel_heros, ...dc_heros]     // this is how we can concatenate two arrays using the spread operator and returns a new array without modifying the original arrays



// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)         // this is how we can flatten an array to a specified depth and returns a new array without modifying the original array

console.log(real_another_array);



console.log(Array.isArray("Devraj"))         // this is how we can check if a variable is an array and returns true or false
console.log(Array.from("Devraj"))            // this is how we can convert a string to an array of characters
console.log(Array.from({name: "devraj"}))    // this is how we can convert an object to an array of key-value pairs and returns a new array and does not modify the original object

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));          // this is how we can create an array from a list of arguments and returns a new array without modifying the original variables