async function all(promises) {
    promises = { ...promises }
    const entries = Object.entries(promises)
    for (let entry of entries) {
        try {
            const resp = await entry[1]
            promises[entry[0]] = resp
        } catch (error) {
            throw error
        }
    }
    return promises
}