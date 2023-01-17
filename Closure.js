// function x(){
//     for(var i=1;i<=5;i++){
//         setTimeout(()=>{
//             console.log(i);
//         },i*1000)
//     }
    
//     console.log("Hello Javascript");
// }
// x()      
////Hello Javascript
// 6
// 6
// 6
// 6
// 6
//when take let insted of var it showing correct ans but in var it showing above output , so we use closure 
// here to overcome this problem. 

// function x(){
//     for(var i=1;i<=5;i++){
//         function closure(i){
//             setTimeout(()=>{
//                 console.log(i);
//             },i*1000)
//         }
//         closure(i)
//     }
    
//     console.log("Hello Javascript");
// }
// x()


// function makeFunc() {
//     const name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();


function z(){
  var b=20
  function x(){
    var a = 9
    function y(){
      console.log(a, b);
    }
    y()
  }
  x()
}
z()
