const repeat = function(str , number){
    var repeated = ''
    while (number > 0){
        repeated += str
        number--
    }
    return repeated
}