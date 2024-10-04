const split = function (str, sep) {
    var result = new Array()
    if(sep == ''){
       return [...str]
    }
    while (true) {
        let end = str.indexOf(sep)
        if (end == -1) {
            break
        }
        result.push(str.slice(0, end))
        str = str.slice(end+ sep.length)
    }
    result.push(str)
    return result
}

const join = function(arr, sep){
    var result = ''
    for(let i = 0; i < arr.length;i++){
        result += arr[i]
        if(i != arr.length-1){
            result += sep
        }
    }
    return result
}
