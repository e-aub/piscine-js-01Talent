function queryServers(serverName, q) {
    const firstUrl = `/${serverName}?q=${q}`
    const scndUrl = `/${serverName}_backup?q=${q}`
    return Promise.race([getJSON(firstUrl), getJSON(scndUrl)])
}

function gougleSearch(q) {
    const promise1 = Promise.all([queryServers('web', q), queryServers('image', q), queryServers('video', q)]).then((results) => {
        return { web: results[0], image: results[1], video: results[2] }
    })

    const promise2 = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('timeout')), 80)
    })

    const res = Promise.race([promise1, promise2]).then(result => result)
    if (res instanceof Error) {
        throw res
    }

    return res

}