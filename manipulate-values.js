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

const reduceValues = function(nutrients, func){
    let values = Object.values(nutrients);
    var acc = 0
    for(let value of values){
        acc = func(acc, value)
    }
    return acc
}
const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(reduceValues(nutrients, (acc, cr) => acc + cr))