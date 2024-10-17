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