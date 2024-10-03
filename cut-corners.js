const extractLastNDigits = function (number, n) {
    let powerOfTen = 1;
    for (let i = 0; i < n; i++) {
        powerOfTen *= 10; 
    }

    while (number >= powerOfTen) {
        number -= powerOfTen; 
    }
    return number * (1 / powerOfTen);
}

const extractDecimalDigits = function (number) {
    let decimalPlaces = 0;
    while (!Number.isInteger(number) && number !== 0) {
        decimalPlaces++;
        number *= 10; 
    }

    return extractLastNDigits(number, decimalPlaces);
}

const trunc = function (number) {
    if(Number.isInteger(number)){
        return number
    }
    if (number < 0){
        return number + extractDecimalDigits(Math.abs(number))
    }else{
        return number - extractDecimalDigits(Math.abs(number))
    }
}

const ceil = function (number) {
    if (number < 0) {
        return trunc(number)
    }

    return getFractional(number) > 0 ? trunc(number) + 1 : trunc(number)
}


const floor = function (number) {
    if (number < 0 && getFractional(number) > 0) {
        return trunc(number) - 1;
    }
    return trunc(number);
}


const getFractional = function (number) {
    return Math.abs(number) - trunc(Math.abs(number))
}

const round = function (number) {
    const fractional = getFractional(number);
    const truncated = trunc(number);
    if (fractional >= 0.5) {
        return truncated + (number < 0 ? -1 : 1);
    }
    return truncated;
}




// const nums = [3, -3, 3, -3, 0]
// console.log(nums.map(round))
// console.log(nums.map(floor))
// console.log(nums.map(trunc))
// console.log(nums.map(ceil))