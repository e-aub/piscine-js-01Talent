const ionOut = function(str){
    const regex = /([\wt]+)(ion)/
    str = str.split(/[ ,.!?:;]/)
    var result = new Array
    for(let i = 0; i < str.length;i++){
        var  match = str[i].match(regex)
        console.log(match)
        if (match !== null){
            result.push(match[1])
        } 
    }
    return result
}