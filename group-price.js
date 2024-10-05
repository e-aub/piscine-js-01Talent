
const groupPrice = function (str) {
    const price = /(?:\$|USD)(\d+)\.(\d+)/g

    var match = Array.from(str.matchAll(price))
    var result = new Array;
    match.filter(element=>{
        result.push(element.slice(0,4))
    })
    return result
}