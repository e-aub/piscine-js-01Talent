const filterEntries = function (object, func) {
    return Object.fromEntries(Object.entries(object).filter(func))
}


function lowCarbs(cart) {
    return filterEntries(cart, (entry) => ((nutritionDB[entry[0]].carbs / 100) * entry[1]) < 50)
}




const mapEntries = function (object, func) {
    return Object.fromEntries(Object.entries(object).map(func))
}

function cartTotal(cart) {
    const keys = Object.keys(cart)
    let result = {}
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        result[key] = mapEntries(nutritionDB[key], ([k, v]) => [k, Math.round((v / 100 * cart[key]) * 10) / 10])
    }
    return result
}



const reduceEntries = function (object, func, acc = 0) {
    return Object.entries(object).reduce(func, acc)
}

function totalCalories(object) {
    return reduceEntries(object, (acc, entry) =>
        Math.round((acc + (nutritionDB[entry[0]]['calories'] / 100) * entry[1]) * 10) / 10, 0)
}



