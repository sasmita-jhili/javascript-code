// var add = function(x,y){
//     return x+y
// }

// console.log(add(5,4));
// function sum (x,y){
//    return x+y
// }

// console.log(sum(2,9));

// var sum1=(x,y)=>{
//    return x+y
// }
// console.log(sum1(5,4));

///arguments binding ---> arguments object

// function regFunc(e,f){
//     console.log(arguments);
// }
// regFunc(5,6)

// // let arrfunc = (a,b)=>{
// //     console.log(arguments);   //Uncaught ReferenceError: arguments is not defined
// // }
// // arrfunc(1,2)

// let arrfunc1 = (...args)=>{
//     console.log(...args);  
// } ///1 2
// arrfunc1(1,2)

// new keyword uses ----->>>>>>>...

function Car(make,model,year){
  this.make=make
  this.model=model
  this.year=year

}

const myCar= new Car("Eagle","Talon Tsi",1993)
const myCar1= new Car("Eagle","Talon Tsi",1993)
const myCar2= new Car("Eagle","Talon Tsi",1993)
console.log(myCar);
console.log(myCar1);
console.log(myCar2);
Car()



























