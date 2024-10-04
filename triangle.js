const triangle = function(charachter, depth){
    let i = depth
    let count = 1 
    let result = ''
    while(i > 0){
        result += charachter.repeat(count)
        if(i != 1){
            result += '\n'
        }
        count++
        i--
    }
    return result
}