var vowels = /[aeiou]/gi;
const vowelDots = function(str){
    return str.replace(/[aeiou]{1}/gi, function(match){
        return match + '.'
    })
}

// console.log(vowelDots('aalkefuiff'))