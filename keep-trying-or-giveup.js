function retry(count, callback) {
    return async function (...args) {
        let errors = 0
        while (errors <= count) {
            try {
                return await callback(...args)
            } catch (error) {
                errors++
                if (errors > count) {
                    throw error
                }
            }
        }
    }
}

function timeout(delay, callback) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('timeout'));
            }, delay);

            try {
                const res = callback(...args).then(res => resolve(res))
            } catch (error) {
                reject(new Error('error'))
            }

        })
    }
}