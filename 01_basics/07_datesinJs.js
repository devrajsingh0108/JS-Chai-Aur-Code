// Dates

let myDate = new Date()
// console.log(myDate.toString());         //this is how we can convert the date to string

// console.log(myDate.toDateString());     // this is how we can convert the date to date string  

// console.log(myDate.toLocaleString());   // this is how we can convert the date to locale string

// console.log(typeof myDate);              //this is how we can check the type of the date object




// let myCreatedDate = new Date(2023, 0, 23)                 // console.log(myCreatedDate.toLocaleString());  // this is how we can create a date object with specific date and time

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)           // console.log(myCreatedDate.toLocaleString());  // this is how we can create a date object with specific date and time

// let myCreatedDate = new Date("2023-01-14")                // console.log(myCreatedDate.toLocaleString());  // this is how we can create a date object with specific date in ISO format


let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());               // this is how we can create a date object with specific date in MM-DD-YYYY format




let myTimeStamp = Date.now()                      // console.log(myTimeStamp);   // this is how we can get the current timestamp in milliseconds 


// console.log(myTimeStamp);                      //this is how we can get the current timestamp in milliseconds

// console.log(myCreatedDate.getTime());          //this is how we can get the timestamp of a specific date in milliseconds

// console.log(Math.floor(Date.now()/1000));      //this is how we can get the current timestamp in seconds 




let newDate = new Date()                //this is how we can create a new date object with the current date and time

console.log(newDate);                   // this is how we can log the current date and time

console.log(newDate.getMonth() + 1);    // this is how we can get the current month (0-11, so we add 1 to get 1-12)

console.log(newDate.getDay());          // this is how we can get the current day of the week (0-6, where 0 is Sunday and 6 is Saturday)



// `${newDate.getDay()} and the time `        //this is how we can get the current day of the week and time in a template literal



newDate.toLocaleString('default', {
    weekday: "long",
    
})                                        // this is how we can get the current day  of the week in long format (e.g., "Monday")
