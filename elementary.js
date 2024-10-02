const divide = function(a, b){
    if (b > 0){
        var quotient = 0
        while(a >= b){
            a -= b
            quotient += 1
        }
        return quotient
    }
    return undefined
}


const modulo = function(a, b){
    while(a >= b){
        a -= b
    }
    return a
}

const multiply = function(a, b){
    var result = 0
    while(b > 0){
        result += a
        b--
    }
    return result
}