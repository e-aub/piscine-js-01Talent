const isFriday = function(date){
    if(date.getDay() === 5){
        return true
    }
    return false
}

const isWeekend = function(date){
    let day = date.getDay()
    if( day === 0 ||day === 6){
        return true
    }
    return false
}


const isLeapYear= function(year){
    return (year%4 === 0 && year %100 !==0) || (year %400 === 0)
}


const isLastDayOfMonth = function(date){
    let day = date.getDate()
    let month = date.getMonth()
    date.setDate(1)
    date.setMonth(date.getMonth()+1)
    date.setDate(date.getDate()-1)
    return date.getDate() === day && date.getMonth() === month
}