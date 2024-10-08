const isValid = function (date) {
    date = new Date(date);
    if (
      date.toString() !== 'Invalid Date' &&
      !Number.isNaN(date) &&
      date instanceof Date
    ) {
      return true;
    }
    return false;
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
        time = new Date(date)
        if(time > now){
            return true
        }
    }
    return false
}

const isPast = function(date){
    if(isValid(date)){
        var now = Date.now()
        time = new Date(date)
        if(time < now){
            return true
        }
    }
    return false
}