// const tinderUser = new Object()      //this is how we can create an object using the Object constructor also know  as singleton 

const tinderUser = {}                   // this is how we can create an object using object literal notation

//-------------------------------------//

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Devraj",
            lastname: "Singh"   
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }             //this is how we can create an object with nested objects and returns a new object without modifying the original objects

// const obj3 = Object.assign({}, obj1, obj2, obj4)        // this is how we can merge multiple objects into one and returns a new object without modifying the original objects 
 
const obj3 = {...obj1, ...obj2}                // this is how we can merge multiple objects into one using the spread operator and returns a new object without modifying the original objects

// console.log(obj3); 


const users = [
    {
        id: 1,
        email: "devraj@gmail.com"
    },
    {
        id: 1,
        email: "harsh@gmail.com"
    },
    {
        id: 1,
        email: "kishan@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));                          // this is how we can get the keys of the object and returns an array of keys

// console.log(Object.values(tinderUser));                        // this is how we can get the values of the object and returns an array of values

// console.log(Object.entries(tinderUser));                       // this is how we can get the key-value pairs of the object and returns an array of arrays with key-value pairs

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));          // this is how we can check if the object has a specific property and returns true or false





//-------------------------------------------------\\



const course = {
    coursename: "js in hindi",
    price: "1199",
    courseInstructor: "devraj",
}

// course.courseInstructor                         

const {courseInstructor: instructor} = course       // this is how we can destructure an object to get a specific property and assign it to a new variable

// console.log(courseInstructor);
console.log(instructor);





//---------------------------------------------\\



//JSON - JavaScript Object Notation a lightweight data interchange format that is easy to read and write for humans and machines 

// {
//     "name": "devraj",
//     "coursename": "js in hindi",
//     "price": "free"
// }





//------API in array of objects format 


[
    {},
    {},
    {}
]

