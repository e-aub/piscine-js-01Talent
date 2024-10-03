const trunc = function (number) {
    var isNegative = false
    var result = 0
    if (number < 0) {
        isNegative = true
        number = Math.abs(number)
    }
    while (number >= 1) {
        number--
        result++
    }
    return isNegative ? result * -1 : result
}

const ceil = function (number) {
    if (number < 0) {
        return trunc(number)
    }

    return getFractional(number) > 0 ? trunc(number) + 1 : trunc(number)
}



const floor = function (number) {
    if (number < 0) {
        return trunc(number) - 1
    }

    return getFractional(number) > 0 ? trunc(number) - 1 : trunc(number)
}

const getFractional = function (number) {
    number = Math.abs(number)
    while (number >= 1) {
        number--
    }
    return number
}

const round = function (number) {
    const fractional = getFractional(number)
    if (fractional >= 0.5) {
        return ceil(number)
    }
    return floor(number)
}

// console.log(Math.round(0.9));
// // Expected output: 1

// console.log(Math.round(5.95), Math.round(-5), Math.round(5));
// // Expected output: 6 6 5

// console.log(Math.round(-5.05), Math.round(-5.5), Math.round(5));
// // Expected output: -5 -5 -6
