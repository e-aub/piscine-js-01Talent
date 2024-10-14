const fusion = function (obj1, obj2) {
    let keys = Object.keys(obj2);
    for (let i = 0; i < keys.length; i++) {
        if (obj1[keys[i]] != undefined) {
            if (obj1[keys[i]] instanceof Array && obj2[keys[i]] instanceof Array) {
                obj1[keys[i]] = obj1[keys[i]].concat(obj2[keys[i]])
            } else if (typeof obj1[keys[i]] === 'string' && typeof obj2[keys[i]] === 'string') {
                obj1[keys[i]] = [obj1[keys[i]], obj2[keys[i]]].join(' ');
            } else if (typeof obj1[keys[i]] === 'number' && typeof obj2[keys[i]] === 'number') {
                obj1[keys[i]] = obj1[keys[i]] + obj2[keys[i]]
            } else if (typeof obj1[keys[i]] === 'object' && typeof obj2[keys[i]] === 'object') {
                obj1[keys[i]] = fusion(obj1[keys[i]], obj2[keys[i]])
            }else{
                obj1[keys[i]] = obj2[keys[i]]
            }
        } else {
            obj1[keys[i]] = obj2[keys[i]]
        }

    }
    return obj1
}

// console.log(fusion({ a: "hello", b: [] }, { a: 4 }))