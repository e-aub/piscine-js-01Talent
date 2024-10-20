async function all(promises){
    promises = {...promises}
    const entries = Object.entries(promises)
    for(let entry of entries){
        promises[entry[0]] = await entry[1]
    }
    return promises
}