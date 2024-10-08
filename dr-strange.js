const addWeek = function (date) {
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let TimebetweenUnixAndNetEpoche = 62135596800000;
    let dayInMilliseconds = 86400000;
    var day = ((date.getTime() + TimebetweenUnixAndNetEpoche) / dayInMilliseconds) % 14
    if (day >= 0 && day <= 6) {
        return dayNames[day]
    } else {
        day = day-7
        return "second" + dayNames[day]
    }

}

const timeTravel = function(dates){
    return  new Date(dates.date.setHours(dates.hour,dates.minute, dates.second))
}
// console.log(addWeek(new Date('0001-01-08')))