//--------------- array ------------------  \\

const myArr = [0, 1, 2, 3, 4, 5]   
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)    // this is how we can create an array using the Array constructor
// console.log(myArr[1]);        // this is how we can access the second element of the array


//------------ Array methods------------------\\ 


// myArr.push(6)     //this is how we can add an element to the end of the array and returns the new length of the array

// myArr.push(7)     //this is how we can add another element to the end of the array and returns the new length of the array

// myArr.pop()       //this is how we can remove the last element of the array and returns the removed element

// myArr.unshift(9)  // this is how we can add an element to the beginning of the array and shift the rest of the elements

// myArr.shift()     // this is how we can remove the first element of the array and shift the rest of the elements



// console.log(myArr.includes(9));     // this is how we can check if an element is present in the array and returns true or false

// console.log(myArr.indexOf(3));      // this is how we can get the index of an element in the array and returns -1 if not found

// const newArr = myArr.join()         //this is how we can join the elements of the array into a string and return a new string

// console.log(myArr);
// console.log( newArr);


//------------------ slice, splice------------------\\

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)         // this is how we can get a shallow copy of a portion of the array and returns a new array and does not modify the original array
console.log(myn1);


console.log("B ", myArr);              //--------imp. note--------slice does not modify the original array so myArr remains unchanged



const myn2 = myArr.splice(1, 3)    // this is how we can change the contents of an array by removing or replacing existing elements and returns the removed elements as a new array and modifies the original array

console.log("C ", myArr);        //--------imp. note------splice modifies the original array so myArr is changed

console.log(myn2);                // the removed elements are returned as a new array
 
