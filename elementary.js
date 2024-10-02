const divide = function(a, b){
    var sign = 1
    if (a < 0||b < 0){
        sign = -1
    }

    a = Math.abs(a)
    b = Math.abs(b)
    
    if (b != 0){
        var quotient = 0
        while(a >= b){
            a -= b
            quotient += 1
        }
        return quotient * sign
    }
    return Infinity * sign
}


const modulo = function(a, b){
    var sign = 1
    if (a < 0){
        sign = -1
    }

    a = Math.abs(a)
    b = Math.abs(b)
    while(a >= b){
        a -= b
     }
    return sign === -1 ? ~a +1 : a 
}


const multiply = function(a, b){
    var result = 0
    var sign = 1
    if (a == 0 || b == 0){
        return 0
    }else if (a < 0||b < 0){
        sign = -1
        if (a < 0){
            a = Math.abs(a)
        }else if (b < 0){
            b = Math.abs(b)
        }
    }
    while(b > 0){
        result += a
        b--
    }
    return sign === -1 ? ~result + 1 : result
}
