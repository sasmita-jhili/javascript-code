// rest operator.......>>>>>>>

// function sum(x,y,z,...args){
//     console.log(args);
//     return x+y+z
// }
// console.log(sum(2,3,5,8,9));

//spread operator......>>>>

// var arg = ["a","b","c","d"]
// function gn(n1,n2,n3,n4){
// console.log(n1,n2,n3,n4); 
// }
// gn(...arg)

var students={
    name:"sasmita",
    age:"26",
    hobbies:["cooking","singing"]
}
// // const age=students.age
// const {...args}=students
// console.log(args);           rest---->combine


var newStudents={
    ...students,
    contact:8658486841
}
console.log( newStudents);