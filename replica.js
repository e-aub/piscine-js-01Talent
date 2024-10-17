function replica(...objects) {
    const result = {}
    for (let obj of objects) {
        if (obj === null || typeof obj !== 'object') {
            continue
        }
        for (let [key, value] of Object.entries(obj)) {
            if (typeof value === 'object' && typeof obj !== 'function' && !obj instanceof RegExp) {
                result[key] = result[key] || {}
                result[key] = replica(result[key], value)
            } else {
                result[key] = value
            }

        }
    }

    return result

}