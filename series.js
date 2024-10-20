async function series(functions) {
    let results = []
    for (let func of functions) {
        results.push(await func())
    }
    return results
}