// const count = true

// let countValue = new Promise(function(resolve,reject){
//     if (count){
//         resolve('There is a count value')
//     }else{
//         reject("There is no count value")
//     }
// })
// console.log(countValue);

// const count = true

// let countValue = new Promise(function(resolve,reject){
//     resolve('Promise is Resolved')
// })
// countValue 
// .then(function successValue(result){
//     console.log(result);
// })
// .then(function successValue1(){
//     console.log("you can call multiple function")
// })
// ;


// console.log(null==undefined);  true


// function getMoneyBack(money,callback){
//     if (typeof money !== 'number'){
//         callback(null,new Error('money is not a number'))
//     }else{
//         callback(money)
//     }
// }
// const money = getMoneyBack(1200)
// console.log(money);

let test = async()=>{
    console.log("B:msg");    
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let result =res.json()
    console.log(result);
    await console.log("D:msg");
    await console.log("E");
    
}
console.log("A:msg");
 test()
console.log("C:msg");

let test1 = async()=>{
    console.log("1:msg");    
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let result =res.json()
    console.log(result);
    await console.log("2:msg");
    await console.log("3:msg");
    
}
test1()
