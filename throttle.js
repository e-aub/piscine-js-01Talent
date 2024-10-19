function throttle1(func, wait) {
    let waitingArgs = null
    let souldWait = false

    return function (...args) {
        if (souldWait) {
            waitingArgs = args
            return
        } else {
            func(...args)
            souldWait = true
            setTimeout(() => {
                souldWait = false
                if(waitingArgs !== null){
                    func(...waitingArgs)
                    waitingArgs = null
                }
            }, wait)
        }
    }
}


// document.getElementById('input').addEventListener('input', e => {
//     throtteled(e.target.value)
// })
// const output = document.getElementById('output')
// const throtteled = throttle1((value) => {
//     output.innerText = value
// }, 2000)