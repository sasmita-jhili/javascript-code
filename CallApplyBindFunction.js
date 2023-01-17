// Call(),apply(),bind().......

let person1={
    fname:"Sasmita",
    lname:"Das"
}
let person2={
    fname:"yash",
    lname:"gupta"
}
function printDetails(state,country){
    console.log(this.fname + " " + this.lname +" "+ "from" +" "+ state + " "+country  );
}
printDetails.call(person1,"odisha","india")
printDetails.call(person2,"up","india")

printDetails.apply(person1,["odisha","india"])
printDetails.apply(person2,["up","india"])

let newUser = printDetails.bind(person1,"odisha","india")
newUser()
