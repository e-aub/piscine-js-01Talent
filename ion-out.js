const ionOut = function(str){
    const regex = /tion/
    str = str.split(/[ ,.!?:;]/)
    var result = new Array
    for(let i = 0; i < str.length;i++){
        var  match = str[i].match(regex)
        if (match !== null){
            result.push(str[i].slice(0, -3))
        } 
    }
    return result
}