const every = function (array, each) {
    for (let i = 0; i < array.length; i++) {
        if (!each(array[i])) {
            return false
        }
    }
    return true
}

const some = function (array, each) {
    for (let i = 0; i < array.length; i++) {
        if (each(array[i])) {
            return true
        }
    }
    return false
}

const none = function (array, each) {
    for (let i = 0; i < array.length; i++) {
        if (each(array[i])) {
            return false
        }
    }
    return true
}