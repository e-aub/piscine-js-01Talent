const add4 = '+4'
const mul2 = '*2'
const findExpression = function(number){
    if (number % 2 !== 0) return undefined;
    var n = 1
    var res = '1'
    while(n < number){
        if(n*2 < number){
            n*=2
            res += ' ' + mul2
        }else{
            n += 4
            if(n+4 <= number){
            res += ' '+add4 
            }
        }
    }
    return res
}

console.log(findExpression(14))