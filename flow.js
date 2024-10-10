const flow = function (functions) {
    return function (...args) {
        return functions.reduce((acc, func) => {
            return [func(...acc)]
        }, args)[0]
    }
}