const matchCron = function (cron, date) {
    dateDetailes = [
        date.getMinutes(),
        date.getHours(),
        date.getDate(),
        date.getMonth() + 1,
        date.getDay()
    ]
    cron = cron.split(' ')
    console.log(cron, '\n', dateDetailes)
    for (let i = 0; i < cron.length; i++) {
        if (cron[i] !== '*' && cron[i] !== dateDetailes[i].toString()) {
            return false
        }
    }
    return true
}