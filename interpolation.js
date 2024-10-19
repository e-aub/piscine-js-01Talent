function interpolation(data) {
    let { step, start, end, callback, duration } = data
    let multiply = 0
    let xAdd = (end - start) / step
    let yAdd = duration / step
    let lastX = start
    let lastY = yAdd

    const executeCallback = () => {
        if (multiply < step) {
            callback([lastX, lastY]);
            lastX += xAdd
            lastY += yAdd
            multiply++;
        } else {
            clearInterval(interval)
        }
    }

    const interval = setInterval(executeCallback, duration / step)
}
