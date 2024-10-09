const citiesOnly = function (array) {
    return array.map(item => item.city)
}

const upperCasingStates = function (array) {
    return array.map(item => item.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))
}

const fahrenheitToCelsius = function (FTempratures) {
    return FTempratures.map(ftemp => {
        const numeric = parseFloat((ftemp.replace(/\s+/g, '').slice(0, ftemp.length - 2)))
        return Math.floor((numeric - 32) * 5 / 9) + '°C'
    })

}

const trimTemp = function (array) {
    return array.map(obj => {
        obj.temperature = obj.temperature.replace(/\s+/g, '');
        return obj
    })
}


const tempForecasts = function (array) {
    return array.map(obj => {
        return `${fahrenheitToCelsius([obj.temperature])[0]}elsius in ${obj.city}, ${upperCasingStates([obj.state])[0]}`
    })
}