// const fruits=['banana','apple','pineapple','grapes']
//const newobj=fruits.toString()
//const joinArr=fruits.join('*')
// console.log(joinArr);       //banana*apple*pineapple*grapes

// const pushArr=fruits.push('mango')       //--->The push() method returns the new array length
// console.log(pushArr);             //5
// console.log(fruits);             //[ 'banana', 'apple', 'pineapple', 'grapes', 'mango' ]

// fruits.pop()            //---> The pop() method returns the value that was "popped out"

// console.log(fruits);             //[ 'banana', 'apple', 'pineapple', 'grapes' ]

// shift()----->
// // The shift() method returns the value that was "shifted out"
// fruits.shift()
// console.log(fruits);

//concat()  ----->
// The concat() method creates a new array by merging (concatenating) existing arrays.
// The concat() method does not change the existing arrays. It always returns a new array.

// const newfruits=['kiwi','avocado']
// const concatArr=fruits.concat(newfruits)
// console.log(concatArr);           // [ 'banana', 'apple', 'pineapple', 'grapes', 'kiwi', 'avocado' ]

// The concat() method can also take strings as arguments:

// const newArr=fruits.concat('Watermelon')
// console.log(newArr);

// splice()  ---->
// The splice() method can be used to add new items to an array:

// const fruits=['banana','apple','pineapple','grapes']
// fruits.splice(5,0, 'strawbery')
// console.log(fruits);                //[ 'banana', 'apple', 'pineapple', 'grapes', 'strawbery' ]
// fruits.splice(0,1,"watermelon")
// console.log(fruits);               //[ 'watermelon', 'apple', 'pineapple', 'grapes', 'strawbery' ]

// The first parameter (0) defines the position where new elements should be added (spliced in).
// The second parameter (1) defines how many elements should be removed.
// The rest of the parameters are omitted. No new elements will be added.

// slice() ----->
// The slice() method slices out a piece of an array into a new array.
// This example slices out a part of an array starting from array element 1 ("Orange"):

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
// console.log(citrus);                    //[ 'Orange', 'Lemon', 'Apple', 'Mango' ]

// const newArr = fruits.slice(1, 3);
// console.log(newArr);                   //[ 'Orange', 'Lemon' ]

// forEach()  --------->

// fruits.forEach((value)=>{console.log(value)})



// -----------------------

// FILTER METHOD

// const arr =[5,1,3,2,6]

// const output = arr.filter((x)=> x >3)

// console.log(output);

// REDUCE METHOD

// const arr =[5,1,3,2,6]

//sum or max
//  function findSum(arr){
//     let sum = 0
//     for(let i=0;i<arr.length;i++){
//         sum = sum + arr[i]
//     }
//     return sum
//  }
//  console.log(findSum(arr));

//  const output = arr.reduce(function(acc,curr){
//  acc= acc + curr
//  return acc
//  }, 0)
//  console.log(output);


/// FIND max

// function findMax(arr){
//     let max =0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]> max){
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log(findMax(arr));

// const output = arr.reduce((max,curr)=>{
//     if(curr > max){
//         max = curr
//     }
//     return max
// },0)

// console.log(output);



// --------------

// const users = [
//     {fname: "pooja",lname:"panigrahi", age: 24},
//     {fname: "yash",lname:"gupta", age: 25},
//     {fname: "sarita",lname:"das", age: 29},
//     {fname: "sasmita",lname:"das", age: 27},
// ]

// const output = users.map((elem)=> {
//     return elem.fname + " " + elem.lname
// })

// acc ={ 24:1,25:1,27:1,29:1}

// const output = users.reduce((acc,curr)=>{
//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age]
//     }else{
//         acc[curr.age] =1
//     }
//     return acc 
// },{})

// const output = users.filter ((elem)=>elem.age <25) 

// console.log(output);


let array =[[1,2,3,4],5,6,7]

let araymap =array.map((arr)=>{
    console.log(arr)
    // return arr.map((val)=>
    // { return val*2})
})

// console.log(araymap);


















