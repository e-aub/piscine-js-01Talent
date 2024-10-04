const vowelDots = function(str){
    vowels = new RegExp('[aeiou]', 'g')
    return str.replaceAll(vowels, (match => match + '.'))
}