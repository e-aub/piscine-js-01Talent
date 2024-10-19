function throttle(func, wait) {
    let souldWait = false

    return function (...args) {
        if (souldWait) {
            return
        } else {
            func(...args)
            souldWait = true
            setTimeout(() => {
                souldWait = false
            }, wait)
        }
    }
}

function opThrottle(func, wait, options = { leading: true, trailing: true }) {
    let souldWait = false
    let lastArgs = null
    if (options.trailing) {
        souldWait = true
        setTimeout(() => {
            souldWait = false
        }, wait)
    }
    return function (...args) {
        if (!options.leading && !options.trailing) {
            return
        } else if (options.leading && options.trailing) {
            if (souldWait) {
                lastArgs = args
            } else {
                func(...args)
                souldWait = true
                setTimeout(() => {
                    souldWait = false
                    if (lastArgs) {
                        func(...lastArgs)
                        lastArgs = null
                        souldWait = true
                        setTimeout(() => {
                            souldWait = false
                        }, wait)
                    }
                }, wait)
            }
        } else if (options.leading && !options.trailing) {
            if (!souldWait) {
                func(...args)
                souldWait = true
                setTimeout(() => {
                    souldWait = false
                }, wait)
            }
        } else {
            if (!souldWait) {
                souldWait = true
                setTimeout(() => {
                    souldWait = false
                    if (lastArgs) {
                        func(...lastArgs)
                        lastArgs = null
                    }
                }, wait)
            } else {
                lastArgs = args
            }
        }
    }
}


// document.getElementById('input').addEventListener('input', e => {
//     throtteled(e.target.value)
// })
// const output = document.getElementById('output')
// const throtteled = opThrottle((value) => {
//     output.innerText = value
// }, 2000, { leading: true, trailing: true })