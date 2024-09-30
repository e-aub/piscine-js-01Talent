is.num = x => typeof x === 'number'
is.nan = x => Number.isNaN(x)
is.str = x => typeof x === 'string'
is.bool = x => typeof x === 'boolean'
is.undef = x => typeof x === 'undefined' 
is.def = x => typeof x !== 'undefined'
is.arr = x => Array.isArray(x)
is.obj = x => {
    const typeOfX = typeof x;
    if (typeOfX === 'null'|| typeOfX === 'object'){
        return true
    }
    return false
}
is.fun = x => typeof x ==='function'
is.truthy = x => Boolean(x) === true
is.falsy = x => Boolean(x) === false
