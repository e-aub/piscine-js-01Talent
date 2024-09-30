const planets = {earth : 1.0,
    mercury : 0.2408467,
    venus : 0.61519726,
    mars :1.8808158,
    jupiter : 11.862615,
    saturn :29.447498 ,
    uranus : 84.016846,
    neptune : 164.79132};

const dogYears = (planet, dogsAgeInSeconds) => {
    var dogsAgeInYears = dogsAgeInSeconds/ 31_557_600
    dogsAgeInYears = 7 * dogsAgeInYears *(planets['earth']/planets[planet])
    return Math.round(dogsAgeInYears*100) / 100
}
