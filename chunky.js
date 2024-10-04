const chunk = function(arr, size){
    var result = []
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result
}