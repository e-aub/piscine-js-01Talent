
const groupPrice = function (str) {
    const price = /(?:\$|USD)(\d+)\.(\d+)/g

    var result = str.matchAll(price)
    result = Array.from(result)
    console.log(result)
}

groupPrice()