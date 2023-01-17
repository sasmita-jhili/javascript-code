let value = "madam"
const pailondrome =()=>{
 let RevValue= value.toString().split('').reverse().join("")
 let NewValue = value.toString()

 if(NewValue == RevValue ){
     console.log("pailondrome");
 }
 else 
 console.log("not a pailondrome");

}
pailondrome()