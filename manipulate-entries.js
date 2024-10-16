// const nutritionDB = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
//   }

//   const groceriesCart = { orange: 500, oil: 20, sugar: 480 }


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
    return Number(reduceEntries(object, (acc, entry) =>{
      const result = acc + (nutritionDB[entry[0]]['calories'] / 100) * entry[1]
        return result
    }
    ).toFixed(3))
}



// console.log(totalCalories(groceriesCart))