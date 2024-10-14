const invert = function (obj) {
    const keys = Object.keys(obj)
    const values = Object.values(obj)
    let result = {}
    for (let i = 0; i < values.length; i++) {
        result[values[i]] = keys[i]
    }
    return result
}