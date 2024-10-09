const longWords = function(array){
    return array.every(str => str.length >= 5)
}


const oneLongWord = function(array){
    return array.some(str => str.length >= 10)
}

const noLongWords = function(array){
    return !array.some(str => str.length >= 7)
}