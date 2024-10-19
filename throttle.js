function throttle(func, wait){
    let waitingArgs = null
    let souldWait = false

    return function(...args){
        if(souldWait){
            waitingArgs = args
            return
        }else{
            if(waitingArgs == null){
                func(...args)
                souldWait = true
            }else{
                func(...waitingArgs)
                waitingArgs = null
                souldWait = true
            }
            setTimeout(()=>{
                souldWait = false
            }, wait)
        }
    }


}


// document.getElementById('input').addEventListener('input',e=>{
//     throtteled(e.target.value)
// })
// const output = document.getElementById('output')
// const throtteled = throttle((value)=>{
//     output.innerText = value
// }, 2000)