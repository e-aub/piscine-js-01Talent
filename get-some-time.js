function getDaysInMonth(year, month) {
    const date = new Date(year, month + 1, 0);
    date.setFullYear(year, month + 1, 0); // Use setFullYear for years < 1000

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
  
 
  const firstDayWeek = function (week, year) {
   let alldays=(week*7)-6
    let days =(week*7)-6
    let i = 0;
    let count=0
    while (days - getDaysInMonth(year, i) > 0) {
        count+=getDaysInMonth(year,i)
        days=days - getDaysInMonth(year, i)
        i++;
     }
    //   console.log("days",alldays-count-getDayNumber(alldays-count,i+1,year)+1)
    //   console.log(i+1)
    //   console.log(getDayNumber(alldays-count,i+1,year))

if (year<999){return alldays-count-getDayNumber(alldays-count,i+1,year)+2+"-"+(i+1)+"-"+year}

 
     return format(alldays-count-getDayNumber(alldays-count,i+1,year)+1)+"-"+format((i+1))+"-"+year

  
         
  };
//    console.log(firstDayWeek(2, "2017"));
  
function format(nbr){
    if (nbr<10){
        nbr="0"+nbr
        
    }
    return nbr
}

