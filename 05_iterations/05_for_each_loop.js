const coding = ["js", "rb", "py", "java", "cpp"];

// coding.forEach(function (val)  {
//     console.log(val)
// });


// coding.forEach(  (item) => {
//     console.log(item);
    
// });


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);


// coding.forEach(  (item, index, arr)  => {
//     console.log(item, index, arr);
// });

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName : "js",
    },
{
        languageName: "java",
        languageFileName : "java",
    },
    {
        languageName: "python",
        languageFileName : "py",
    },
]


myCoding.forEach(  (item)  => {
    console.log(item.languageName);
    
})