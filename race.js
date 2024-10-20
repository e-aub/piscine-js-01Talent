async function race(promises) {
    return new Promise((resolve, reject) => {
        for (let promise of promises) {
            promise.then(result => resolve(result)).catch(err => reject(err))
        }
    })
}

async function some(promises, count) {
    if (promises.length === 0 || count == 0) {
        return []

    }
    // } else if () {
    //     return new Promise((resolve, _) => {
    //         resolve(undefined)
    //     })
    // }
    let results = []
    for (let i = 0; i <= count; i++) {
        race(promises.slice(0, i)).then(results.push(i)).catch(results.push(undefined))
    }
    return results
}