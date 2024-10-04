var vowels = '/[aeiou]/gi'
const vowelDots = function(str){
    return str.replaceAll('/[aeiou]/gi', (match => match + '.'))
}