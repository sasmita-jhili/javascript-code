// let arr =[1,2,3,[4,[5,[6]]],7,8,9]
// let newArr =arr.flat(3)
// console.log(newArr);   //[1, 2, 3, 4, 5, 6, 7, 8, 9]

function multipyAll(arr) {
    let pr = 1
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j])
        }

    }
    return pr
}
multipyAll([1,2,3,[4,[5,[6]]],7,8,9])