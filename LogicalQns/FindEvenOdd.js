const nums =[1,2,3,4,5,6,7,8,9,10,11,12,13]
function FindOddEven(){
    var even=[]
    var odd=[]
    for(var i=0;i<nums.length;i++){
        if(i % 2 === 0 )
          even.push(nums[i])
          else 
          odd.push(nums[i])
    }
     console.log(even)
     console.log(odd)
}
FindOddEven()