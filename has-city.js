const hasCity = function(country, cities){
    return function(city){
        if(cities.includes(city)){
            return `${city} is a city from ${country}`
        }
        return `${city} is not a city from ${country}`
    }
}