//: returns the string with the first 2 characters removed.
const cutFirst = function(str){
    return str.slice(2)
}

//returns the string with the last 2 characters removed.
const cutLast = function(str){
    return str.slice(0, -2)
}

//returns the string with the first 2 characters and the last 2 characters removed.

const cutFirstLast = function(str){
    return str.slice(2, -2)
}

//returns only the first 2 characters.

const keepFirst = function(str){
    return str.slice(0, 2)
}


//returns only the last 2 characters.

const keepLast = function(str){
    return str.slice(-2)
}

//returns the first 2 characters, and the last 2 characters.

const keepFirstLast = function(str){
    if (str.length <= 3){
        return str
    }
}

// console.log(keepFirstLast('afd'))
