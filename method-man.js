const words = (sentence) => sentence.split(" ");
const sentence = (words) => words.join(" ");
const yell = (str) => str.toUpperCase();
const whisper = (str) => '*' + str.toLowerCase() + '*';
const capitalize = (str) => {
    if (str.length === 0){
        return str
    }else{
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }
}
