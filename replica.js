function replica(...objects) {
    const result = {};

    for (let obj of objects) {
        if (obj === null || typeof obj !== 'object') {
            continue;
        }
        for (let [key, value] of Object.entries(obj)) {
            if (typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof RegExp)) {
                result[key] = Array.isArray(result[key]) ? {} : result[key];
                result[key] = {...result[key], ...replica(value)} 
            } else {
                result[key] = value;
            }
        }
    }
    return result;
}

// console.log(replica({ line: 'Replicants are like any other machine' }, { author: 'Rich' }));
// console.log(replica({ a: [1, 2, 4] }, { a: { b: [4] } })); 
// console.log(replica( { a: { b: 1, c: 2 } }, { a: { c: 23 } }))

