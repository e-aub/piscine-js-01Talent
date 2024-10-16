function replica(...objects) {
    let result 
    for(obj of objects){
        result = {...result, ...deepCopy(obj)}
    }
    return result
}


function deepCopy(obj){
    if(obj === null || typeof obj === 'function' || obj instanceof RegExp|| typeof obj !== 'object' ){
        return obj
    }
    const copy = Array.isArray(obj) ? [] : {}

    for(let [key, ] of Object.entries(obj)){
       copy[key] =  deepCopy(obj[key])
        }

        return copy
}

// console.log(replica({ a: { b: { c: [123, 1] } } }, { a: { b: { c: '1' } } }))