const name = "devraj"
const repoCount = 10

// console.log(name + repoCount + " Value");  //outdated(so try not to use)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//modern synatx also knwwn as template literals (recommended to use)

const gameName = new String('hitesh-hc-com') // another way to define string  (String object)

// console.log(gameName[0]);    // this is how we can access the string characters with index

// console.log(gameName.__proto__);    //  this is how we can access the prototype of the string object


// console.log(gameName.length);   // this is how we can access the length of the string


// console.log(gameName.toUpperCase());    // this is how we can convert the string to upper case


console.log(gameName.charAt(2));     // this is how we can access the character at a specific index  

console.log(gameName.indexOf('t'));     // this is how we can find the index of a specific character

const newString = gameName.substring(0, 4)      // this is how we can extract a substring from the string and last index is not included
console.log(newString);

const anotherString = gameName.slice(-8, 4)    // this is how we can extract a substring from the string using slice and it can also take negative index
console.log(anotherString); 

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());     // this is how we can remove the whitespace from the start and end of the string

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))     // this is how we can replace a specific character in the string

console.log(url.includes('sundar'))     // this is how we can check if a specific character is present in the string or not

console.log(gameName.split('-'));        // this is how we can split the string into an array of substrings based on a specific character   