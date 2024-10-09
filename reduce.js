const fold = function (array, func, acc) {
    for (let i = 0; i < array.length; i++) {
        acc = func(acc, array[i])
    }
    return acc
}

const foldRight = function (array, func, acc) {
    for (let i = array.length - 1; i >= 0; i--) {
        acc = func(acc, array[i])
    }
    return acc
}

const reduce = function (array, func) {
    if (array.length < 1) {
        throw new Error()
    }
    var acc = array[0]
    for (let i = 1; i < array.length; i++) {
        acc = func(acc, array[i])
    }
    return acc
}

const reduceRight = function (array, func) {
    if (array.length < 1) {
        throw new Error()
    }
    var acc = array[array.length-1]
    for (let i = array.length-2; i >= 0; i--) {
        acc = func(acc, array[i])
    }
    return acc
}