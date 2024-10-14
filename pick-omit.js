const pick = function (object, strs) {
    if (typeof strs === 'string') {
        strs = [strs]
    }
    const keys = Object.keys(object)
    let result = {}
    for (let i = 0; i < keys.length; i++) {
        if (strs.includes(keys[i])) {
            if (!object[keys[i]] instanceof undefined && !object[keys[i]] instanceof null) {
                result[keys[i]] = object[keys[i]]
            }
        }
    }
}

const omit = function (object, strs) {
    if (typeof strs === 'string') {
        strs = [strs]
    }
    const keys = Object.keys(object)
    let result = {}
    for (let i = 0; i < keys.length; i++) {
        if (!strs.includes(keys[i])) {
            if (!object[keys[i]] instanceof undefined && !object[keys[i]] instanceof null) {
                result[keys[i]] = object[keys[i]]
            }
        }
    }
}