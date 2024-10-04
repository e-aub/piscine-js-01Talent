const letterSpaceNumber = function(str){
    const regex = new RegExp(`([a-zA-Z] \\d)([^a-zA-z0-9]|$)`, 'g') 
    var matches =  [...str.matchAll(regex)]
    const result = matches.map(match => match[1])
    return result
}


console.log(letterSpaceNumber("It's 20 past 3"))
// output: ['e 1']