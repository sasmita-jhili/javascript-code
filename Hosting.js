// Hosting is default behaviour of js by which you can access variable and 
// function even before you have initialize it or putt some 
// value in it, you can access it without any error.
  


// console.log(a);
// var a=10
// getName()
// function getName(){
//     console.log("Welcome to Javscript World");
// }

function getValue(){
    console.log(a)
    var a
}
// getValue()
console.log(getValue());