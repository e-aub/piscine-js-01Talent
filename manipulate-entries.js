const filterEntries = function (object, func) {
    return Object.fromEntries(Object.entries(object).filter(func))
}

const mapEntries = function (object, func) {
    return Object.fromEntries(Object.entries(object).map(func))
}

const reduceEntries = function (entries, func, acc) {
    return entries.reduce(func, [entries], acc)
}

const groceriesCart = Object.entries({ orange: 500, oil: 20, sugar: 480 })

console.log(reduceEntries(groceriesCart, ((acc, [k, v]) => acc + k + v), ''))