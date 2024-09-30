is.num = x => typeof x === 'number'
is.nan = x => typeof x === 'NaN'
is.str = x => typeof x === 'string'
is.bool = x => typeof x === 'boolean'
is.undef = x => typeof x === 'undefined' 
is.def = x => typeof x !== 'undefined'
is.arr = x => x.isArray()
is.obj = x => {
    typeOfX = typeof x;
    if (typeOfX === 'null'|| typeOfX === 'object'){
        return true
    }
    return false
}
is.fun = x => typeof x ==='function'
is.truthy = x => Boolean(x) === true
is.falsy = x => Boolean(x) === false
