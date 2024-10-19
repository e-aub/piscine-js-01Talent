function throttle(func, wait) {
    let WaitArgs = null
    let shouldWait = false
    const timeOutFunc = () => {
        if (WaitArgs == null) {
            shouldWait = false
        }else{
            func(...WaitArgs)
            WaitArgs = null
            setTimeout(timeOutFunc, wait)
        }
    }

    return function (...args) {
        if (shouldWait) {
            WaitArgs = args
            return
        }
        func(...args)
        shouldWait = true
        setTimeout(timeOutFunc, wait)
    }
    
}


// document.getElementById('input').addEventListener('input',e=>{
//     throtteled(e.target.value)
// })
// const output = document.getElementById('output')
// const throtteled = throttle((value)=>{
//     output.innerText = value
// }, 2000)