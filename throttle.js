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
        if (souldWait) {
            if(options.leading && options.trailing){
                lastArgs = args
            }
            return
        } else {
            if(options.leading && options.trailing){
                func(...lastArgs)
                lastArgs = null
            }
            func(...args)
            souldWait = true
            setTimeout(() => {
                souldWait = false
            }, wait)
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