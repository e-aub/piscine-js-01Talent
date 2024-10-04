const vowelDots = function(str){
    const vowels = new RegExp('[aeiou]', 'g')
    return str.replaceAll(vowels, (match => match + '.'))
}