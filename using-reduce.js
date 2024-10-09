const adder = function(array, initialAcc = 0){
    return array.reduce((acc, curr)=>{
        acc += curr
        return acc
    }, initialAcc)
}

const sumOrMul = function(array, initialAcc = 0){
    return array.reduce((acc, curr)=>{
        if(curr % 2 === 0){
            acc *= curr
            return acc
        }
        acc += curr
        return acc
    }, initialAcc)
}

const funcExec = function(array, initialAcc = 0){
    return array.reduce((acc, func) => {
        acc += func()
        return acc
    }, initialAcc)
}