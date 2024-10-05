
const getURL = function (dataSet) {
    const urlRegex = /https?:\/\/(?:www\.)?[a-zA-Z0-9@:%._\+=~#-]{1,256}(\.[a-zA-Z0-9()]{1,6})?(?:[-A-Za-z0-9()\[\]%,:_@\+\/.~#?=&]*)/g;
    var matches = dataSet.matchAll(urlRegex);
    return [...matches].map((match => match[0]))
    
}

const greedyQuery = function(dataSet){
   var urls = getURL(dataSet);
   var parameter = new RegExp(/\?([^&=]+=[^&]*){1}((\&([^&=]+=[^&]*))|(\&([^&=]+))){1}/g)
   var result = new Array
    for(let i = 0; i < urls.length;i++){
        if(parameter.test(urls[i])){
            result.push(urls[i])
        }
    }
    return result
}

const notSoGreedy = function(dataSet){
    var urls = getURL(dataSet);
    var parameter = new RegExp(/\?([^&=]+=[^&]*){1}((\&([^&=]+=[^&]*))|(\&([^&=]+))){1,2}$/g)
    var result = new Array
     for(let i = 0; i < urls.length;i++){
         if(parameter.test(urls[i])){
             result.push(urls[i])
         }
     }
     return result
 
 }