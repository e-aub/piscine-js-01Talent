const filter = function (array, func) {
    var result = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            result.push(array[i])
        }
    }
    return result
}


const reject = function (array, func) {
    var result = []
    for (let i = 0; i < array.length; i++) {
        if (!func(array[i], i, array)) {
            result.push(array[i])
        }
    }
    return result
}


const partition = function (array, func) {
    var truth = []
    var falsee = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            truth.push(array[i])
        } else {
            falsee.push(array[i])
        }
    }
    return [truth, falsee]
}