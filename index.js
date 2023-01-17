// if (true){
//     var x=5
//     const y=6
//     let z=7
// }
// console.log(x+y+z);
//ReferenceError: y is not defined

// const a={x:1}
// const b={x:1}
// console.log(a!=b);                      //true
// console.log(a===b);                    //false
// console.log(a.x===b.x);                //true   
// console.log(a['x']===b['x']);          //true

// let scores=[]
// scores.push(1,2)
// scores.pop()
// scores.push(3,4)
// scores.pop()
// score=scores.reduce((a,b)=>a+b)
// console.log(score);   //4


// let animals = ['eagle','osprey','salmon']
// let key = animal => animal ==='salmon'
// if(animals.some(key)){
//     console.log('swim');
// }
 
// const obj={a:1,b:2,c:3}
// const obj2={...obj,a:0}
// console.log(obj2.a,obj2.b);     //0 2

// console.log(typeof(4.2));          //number

// var thing
// let fun=(str='no arg')=>{
//     console.log(str);
// }
// fun(thing)            // no arg
// fun(null)             // null

// const lion =1
// let tiger =2
// var bear;
// ++lion                //TypeError: Assignment to constant variable.
// bear +=lion +tiger
// tiger++

// function printA(){
//     console.log(answer);
//     var answer=1
// }
// printA()            //undefined
// printA()           //undefined


// const myset=new Set()
// myset.add(1)
// myset.add(1)
// myset.add('a')
// myset.add('a')
// myset.add(undefined)
// myset.add(undefined)
// myset.add({prop:true})
// myset.add({prop:true})
// console.log(myset);    //Set(5) { 1, 'a', undefined, { prop: true }, { prop: true } }
// console.log('size:' ,myset.size);   //size: 5

// async function apicall(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{resolve('b')},50)
//     })
// }
// async function logger(){
//     setTimeout(()=>console.log('a'),10)
//     console.log(await apicall())
//     console.log('c');
// }
// logger()   //a b c


// const myaray=['rock','paper','sc','li','sp']
// myFunction(...myaray)

// let x ='fog'
// function first(){
//     console.log(x);
// }
// x='dog'
// function second(){
//     let x ='log'
//     first()
// }

// const obj={
//     prop:1
// }
// console.log(obj.prop);
// Object.defineProperty(obj,'prop',{
//     writable:false,
//     value:2
// })
// console.log(obj.prop);
// obj.prop=3
// console.log(obj.prop);


// function* gen1(){
//     console.log(yield 1)
//     console.log(yield 2)
//     console.log(yield 3)
// }
// const iterator = gen1()
// console.log(iterator.next('a').value)
// console.log(iterator.next('b').value)
// console.log(iterator.next('c').value)

// let green
// grnne=false
// console.log(grnne);

// function abc(){
//     return 
// }


// function x(y){
//     console.log("its x");
//     y()
// }
// x(function y(){
//     console.log("its y");
// })

const aar1=10
const arr1=20
console.log(arr1)

