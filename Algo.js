function algo(arr){
    for(var i= 0;i < arr.length; i++){
        arr[i] *= arr[i]
    }
    return arr;
}
//console.log(algo([1,2,3]))

function algo2(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i] = arr[i])
    }
}
console.log(algo2([1,2,3]))
