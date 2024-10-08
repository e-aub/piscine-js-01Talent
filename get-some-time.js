function getDaysInMonth(year, month) {
    const date = new Date(year, month + 1, 0);
    return date.getDate()
  }

  function getDayNumber(day, month, year) {
    const date = new Date(year, month - 1, day); // JavaScript months are 0-indexed
    const dayName = date.toLocaleString('en-US', { weekday: 'long' });
  
    const daysMap = {
      'Monday': 1,
      'Tuesday': 2,
      'Wednesday': 3,
      'Thursday': 4,
      'Friday': 5,
      'Saturday': 6,
      'Sunday': 7
    };
  
    return daysMap[dayName];
  }
  
 
  const test = function (week, year) {
   let alldays=(week*7)-6
    let days =(week*7)-6
    let i = 0;
    count=0
    while (days - getDaysInMonth(year, i) > 0) {
        count+=getDaysInMonth(year,i)
        days=days - getDaysInMonth(year, i)
        i++;
     }
    //   console.log("days",alldays-count-getDayNumber(alldays-count,i+1,year)+1)
    //   console.log(i+1)
    //   console.log(getDayNumber(alldays-count,i+1,year))




     return alldays-count-getDayNumber(alldays-count,i+1,year)+1+"-"+(i+1)+"-"+year

 

  };
//   console.log(test(2, 2017));
  