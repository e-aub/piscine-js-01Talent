const filterValues = function (nutrients, func) {
    let result = {}
    let entries = Object.entries(nutrients)
    for (let i = 0; i < entries.length; i++) {
        if(func(entries[i][1])){
            result[entries[i][0]] = entries[i][1]
        } 
    }
    return result
}

const mapValues = function(nutrients, func){
    let keys = Object.keys(nutrients);
    for(let key of keys){
        nutrients[key] = func(nutrients[key])
    }
    return nutrients
}

const reduceValues = function(nutrients, func, acc = 0){
    let values = Object.values(nutrients);
    for(let value of values){
        acc = func(acc, value)
    }
    return acc
}


console.log(reduceValues({ a: 1, b: 2, c: 3 }, (acc, cr) => acc + cr, 3))