const vowelDots = function(str){
    var vowels = new RegExp('[aeiou]')
    return str.replaceAll(vowels, (match => match + '.'))
}
