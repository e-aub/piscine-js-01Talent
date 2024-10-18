function debounce(func, wait) {
    let timer
    return function (args) {
        clearTimeout(timer)
        console.log(timer)
        timer = setTimeout(() => func(...args), wait)
    }
}

function opDebounce(func, wait, leading = false) {
    let timer
    let isTimeOutActive = false
    return function (...args) {
        clearTimeout(timer)
        if (leading) {
            if (!isTimeOutActive) {
                func(...args)
                isTimeOutActive = true
            }
            timer = setTimeout(() => {
                isTimeOutActive = false

            }, wait)
        } else {
                timer = setTimeout(() => func(...args), wait)
            }
        }

}

