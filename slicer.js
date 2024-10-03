const slice = function(arr, start=0, end = arr.length){
    if (start === 0 && end === arr.length-1){
        return arr
    }
    const isString = typeof arr === 'string';
    if (isString) {
        arr = arr.split('');
    }
    var result = []
    if (start < 0 || end < 0){
        if (start < 0 && end === arr.length){
            start = end + start
        }else if(start >= 0 && end < 0){
            if (start === 0){
                end = arr.length + end
            }else{
                end = start - end
            }
        }else if (start < 0&& end <0 ){
            start = Math.abs(start)
            end = start + Math.abs(end) +1
        }
    }
        for(let i = start; i < end; i++){
            result.push(arr[i])
        }
    
    return isString ? result.join('') :result
}

// console.log(slice('abcdef', -3, -1))