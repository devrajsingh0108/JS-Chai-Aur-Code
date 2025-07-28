//---------------while loop---------------\\ 

// while loop is used when we do not know how many times we want to iterate
// it will run until the condition is true  


let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }





let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}
//---------------do while loop---------------\\
// do while loop is used when we want to run the code at least once
// it will run the code once and then check the condition
// it will run until the condition is true


let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);