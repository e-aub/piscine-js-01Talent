

const ionOut = function(str){
    const regex = /([\w]*)(ion)(t[\w]*)/
    str = str.split(' ')
    var result = new Array
    for(let i = 0; i < str.length;i++){
        var  match = str[i].match(regex)
        console.log(match)
        if (match !== null){
            result.push(match[1]+ match[3])
        } 
    }
    return result
}
