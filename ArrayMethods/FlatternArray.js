var arr =[1,2,[3,[4,5,[6,7],8]]]
function flaternArry(arr){
    var flatArr =[]
    for(var i=0;i<arr.length;i++){
        if(Array.isArray(arr[i]))
        flatArr.push(...flaternArry(arr[i]))
        else
        flatArr.push(arr[i])
    }
    return flatArr
}

console.log(flaternArry(arr))