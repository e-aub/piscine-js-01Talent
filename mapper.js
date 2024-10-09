const map = function(array, func){
    var result = []
    for(let i = 0; i < array.length; i++){
        result.push(func(array[i], i, array))
    }
    return result
}


const flatMap = function(array, func){
    var mapped = map(array, func)
    return [].concat(...mapped)
}