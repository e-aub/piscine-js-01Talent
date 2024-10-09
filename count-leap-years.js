const isLeapYear= function(year){
    return (year%4 === 0 && year %100 !==0) || (year %400 === 0)
}

const countLeapYears = function(date){
    let splicedDate = (date.toString().split(' '))
    let year = parseInt(splicedDate[3])
    let leapYears = 0;
    for(let i = 1; i < year;i++){
        if(isLeapYear(i)){
            leapYears++
        }
    } 
    return leapYears  
}

console.log(countLeapYears(new Date('2048-12-08')))