const reverse = function(arg1){
    var isString = false
    var result = []
    if(typeof arg1 === 'string'){
        isString = true
        arg1 = arg1.split('')
    }
    for(let i = arg1.length-1; i >= 0; i--){
        result.push(arg1[i])
    }
    return isString ? result.join('') : result 
}
