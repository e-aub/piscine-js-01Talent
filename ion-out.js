const ionOut = function(str){
    const regex = /([t]+[\w]+)(ion)/
    str = str.split(/[ ,.!?:;]/)
    var result = new Array
    for(let i = 0; i < str.length;i++){
        var  match = str[i].match(regex)
        if (match !== null){
            result.push(match[1])
        } 
    }
    return result
}

console.log(ionOut('promotion, provision'))