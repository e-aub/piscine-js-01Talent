const mult2 = function (a) {
    return function (b) {
        return a * b
    }
}

const add3 = function (a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

const sub4 = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a - b - c - d
            }
        }
    }
}