function debounce(func, wait) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(()=>func(args), wait)
    }
}

function opDebounce(options) {

}

const output = document.getElementById('output');

const logInput = debounce((value)=>{
    output.textContent = value
}, 1000)

document.getElementById('input').addEventListener('input', (event)=>{
    logInput(event.target.value)
})