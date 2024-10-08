const isValid = function (date) {
    if (new Date(date).toString() === 'Invalid Date') {
      return false;
    }
    if (!(date instanceof Date) && typeof date !== 'number') {
      return false;
    }
    return true;
  };

const isAfter = function(date1, date2){
    if(date1 > date2){
        return true
    }
    return false
}

const isBefore = function(date1, date2){
    if(date1 < date2){
        return true
    }
    return false
}
const isFuture = function(date){
    if(isValid(date)){
        var now = Date.now()
        var time = new Date(date)
        if(time > now){
            return true
        }
    }
    return false
}

const isPast = function(date){
    if(isValid(date)){
        var now = Date.now()
        var time = new Date(date)
        if(time < now){
            return true
        }
    }
    return false
}