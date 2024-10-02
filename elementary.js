const divide = function(a, b){
    var positive = true
    if (a < 0||b < 0){
        positive = false
    }

    a = Math.abs(a)
    b = Math.abs(b)
    
    if (b != 0){
        var quotient = 0
        while(a >= b){
            a -= b
            quotient += 1
        }
        return !positive ? ~quotient +1 : quotient
    }
    return !positive ? -Infinity : Infinity
}


const modulo = function(a, b){
    var positive = true
    if (b == 0){
        return NaN
    }
    if (a < 0){
        positive = false
    }else if (a == 0){
        return 0
    }

    a = Math.abs(a)
    b = Math.abs(b)
    while(a >= b){
        a -= b
     }
    return !positive ? ~a +1 : a 
}


const multiply = function(a, b){
    var result = 0
    var positive = true
    if (a == 0 || b == 0){
        return 0
    }else if (a < 0||b < 0){
        positive = false
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
    return !positive ? ~result + 1 : result
}