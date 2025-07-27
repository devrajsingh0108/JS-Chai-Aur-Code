// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Devraj",
    "full name": "Devraj Singh",
    [mySym]: "mykey1",
    age: 22,
    location: "Kolkata",
    email: "devraj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)        // this is how we can access the email property of the object and returns the value of the property      

// console.log(JsUser["email"])     // this is how we can access the email property of the object using bracket notation and returns the value of the property  

// console.log(JsUser["full name"])     // this is how we can access the "full name" property of the object using bracket notation and returns the value of the property

// console.log(JsUser[mySym])            // this is how we can access the property using a symbol and returns the value of the property



JsUser.email = "devraj@chatgpt.com"
// Object.freeze(JsUser)           // this is how we can freeze the object so that no new properties can be added and existing properties cannot be modified

JsUser.email = "devraj@microsoft.com"   // 
// console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());