const includes = function(arr, toBeMatched){
    var matched = false
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == toBeMatched){
            return true
        }
    }
    return false
}


const indexOf = function(arr, toBeMatched, start = 0){
    for (let i = start; i < arr.length; i++){
        if (i >= start){
            if (arr[i] == toBeMatched){
                return i
            }
        }
      
    }
    return -1
}



const lastIndexOf = function(arr, toBeMatched, start = arr.length-1){
    for (let i = arr.length-1; i >= start; i--){
        if (arr[i] == toBeMatched){
            return i
        }
    }
    return -1
}
