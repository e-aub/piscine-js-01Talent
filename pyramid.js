const pyramid = function(charachter, depth){
    let i = depth
    let count = 1 
    let result = ''
    let rightSpaces = depth-1 
    while(i > 0){
        result += ' '.repeat(rightSpaces)
        result += count == 1 ? charachter.repeat(count) : charachter.repeat(count*2)
        if(i != 1){
            result += '\n'
        }
        rightSpaces--
        count++
        i--
    }
    return result
}