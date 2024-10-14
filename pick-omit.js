const pick = function (object, strs) {
    if (typeof strs === 'string') {
        strs = [strs]
    }
    const keys = Object.keys(object)
    let result = {}
    for (let i = 0; i < keys.length; i++) {
        if (strs.includes(keys[i])) {
            if (typeof object[keys[i]] !==  "undefined" && typeof object[keys[i]] !==  "null") {
                result[keys[i]] = object[keys[i]]
            }
        }
    }
    return result
}

const omit = function (object, strs) {
    if (typeof strs === 'string') {
        strs = [strs]
    }
    const keys = Object.keys(object)
    let result = {}
    for (let i = 0; i < keys.length; i++) {
        if (!strs.includes(keys[i])) {
            if (typeof object[keys[i]] !==  "undefined" && typeof object[keys[i]] !==  "null") {
                result[keys[i]] = object[keys[i]]
            }
        }
    }
    return result
}

console.log(pick({ firstName: 'James', lastName: 'Bond' },  ['firstName', 'lastName']))