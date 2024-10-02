const includes = function(arr, toBeMatched){
    var matched = false
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == toBeMatched){
            return true
        }
    }
    return false
}


const indexOf = function(arr, toBeMatched, start){
    if (start === undefined){
        start = 0
    }
    arr = arr.slice(start)
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == toBeMatched){
            return i
        }
    }
    return -1
}



const lastOf = function(arr, toBeMatched, start){
    if (start === undefined){
        start = 0
    }
    arr = arr.slice(start)
    for (let i = arr.length; i > 0; i--){
        if (arr[i] == toBeMatched){
            return i
        }
    }
    return -1
}
