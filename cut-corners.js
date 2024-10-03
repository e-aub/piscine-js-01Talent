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
    if (number < 0 && getFractional(number)> 0)  {
        return trunc(number) - 1
    }

    return getFractional(number) > 0 ? trunc(number)  : trunc(number)
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
    var truncated = trunc(number)
    if (fractional >= 0.5) {
        return truncated + (number < 0 ? -1 : 1);
    }
    return truncated
}
