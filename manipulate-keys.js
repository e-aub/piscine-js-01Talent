const filterKeys = function(nutrients, func){
    var result = {};
    let keys = Object.keys(nutrients);
    for(let key of keys){
        if(func(key, nutrients)){
            result[key] = nutrients[key]
        }
    }
    return result
}


const mapKeys = function(nutrients, func){
    var result = {};
    let keys = Object.keys(nutrients);
    for(let key of keys){
        result[func(key)] = nutrients[key]
    }
    return result
}




const reduceKeys = function(nutrients, func, acc){
    let keys = Object.keys(nutrients);
    if (typeof acc === 'undefined'){
        acc = keys[0]
        keys = keys.slice(1)
    }
    for(let key of keys){
        acc = func(acc, key)
    }
    return acc
}
