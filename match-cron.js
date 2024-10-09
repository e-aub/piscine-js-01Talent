const matchCron = function (cron, date) {
    date = [
        date.getMinutes(),
        date.getHours(),
        date.getDate(),
        date.getMonth() + 1,
        date.getDay()
    ]
    cron = cron.split(' ')
    console.log(cron, '\n', date)
    for (let i = 0; i < cron.length; i++) {
        if (cron[i] !== '*' && cron[i] !== date[i].toString()) {
            return false
        }
    }
    return true
}