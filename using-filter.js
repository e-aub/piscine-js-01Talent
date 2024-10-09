const filterShortStateName = function (array) {
    return array.filter(str => str.length < 7)
}

const filterStartVowel = function (array) {
    return array.filter(str => /^[aeiou]/i.test(str))
}

const filter5Vowels = function (array) {
    return array.filter(str => {
        let counter = 0;
        let vowels = 'aeiouAEIOU'
        for (let letter of str) {
            if (vowels.includes(letter)) {
                counter++
            }
            if (counter >= 5) {
                return true
            }
        }
        return false
    })
}


const filter1DistinctVowel = function (array) {
    return array.filter(str => new Set(str.toLowerCase().match(/[aeiou]/gi)).size === 1)
}

const multiFilter = function (array) {
    return array.reduce((acc, obj) => {
        if (obj.capital.length >= 8 &&
            !/^[aeiou]/i.test(obj.name) &&
            /[aeiou]/i.test(obj.tag) &&
            obj.region !== 'South') {acc.push(obj)}
            return acc
        }, [])
}