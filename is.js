is.num = x => typeof x === 'number'
is.nan = x => Number.isNaN(x)
is.str = x => typeof x === 'string'
is.bool = x => typeof x === 'boolean'
is.undef = x => typeof x === 'undefined' 
is.def = x => typeof x !== 'undefined'
is.arr = x => Array.isArray(x)
is.obj = x => typeof x === 'object' && !Array.isArray(x) && x != null
is.fun = x => typeof x ==='function'
is.truthy = x => Boolean(x) === true
is.falsy = x => Boolean(x) === false
