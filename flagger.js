function flags(obj){
    const result = {alias : {h : 'help'}, description : []}
    const flags = Object.keys(obj)
    if(flags.length === 0){
        result.description = ''
        return result
    }
    for(let flag of flags){
        result.alias[flag.slice(0,1)] = flag;
    }
    if (Array.isArray(obj.help) && obj['help'].length >= 1){
        for(let hlp of obj.help){
            result['description'].push(`-${hlp.slice(0,1)}, --${hlp}: ${obj[hlp]}`)
        }
    }else{
        for(let hlp of flags){
            result['description'].push(`-${hlp.slice(0,1)}, --${hlp}: ${obj[hlp]}`)
        }
    }
   

    if (result['description'].length === 1){
        result.description = result.description[0]
    }else{
        result.description = result.description.join('\n')
    }
    return result
}


// console.log(flags({
//     invert: 'inverts and object',
//     'convert-map': 'converts the object to an array',
//     assign: 'uses the function assign - assign to target object',
//   }))