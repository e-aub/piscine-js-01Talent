function flags(obj){
    const result = {alias : {}, description : []}
    const flags = Object.keys(obj)
    for(let flag of flags){
        result.alias[flag.slice(0,1)] = flag;
    }

    for(let hlp of obj.help){
        result['description'].push(`-${hlp.slice(0,1)}, --${hlp}: ${obj[hlp]}`)
    }

    if (result['description'].length === 1){
        result.description = result.description[0]
    }
    return result
}


// console.log(flags({
//     multiply: 'multiply the values',
//     divide: 'divides the values',
//     help: ['divide', 'multiply']
//   }))