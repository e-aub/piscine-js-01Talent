
const getURL = function (dataSet) {
    const urlRegex = /(?!.*-{2,})(?=.{1,253}$)(http(?:s){0,1}:\/\/)?(?:(www\.)?)(?!-)((?:[A-Za-z0-9-]{1,63}(?<!-)\.)+(?:(?!-)[A-Za-z]{2,}))([\/\S]*)/g;
    var matches = dataSet.matchAll(urlRegex);
    return [...matches].map((match => match[0]))
    
}

const greedyQuery = function(dataSet){
   var urls = getURL(dataSet);
   var parameter = new RegExp(/(\?(?!.*\?+)(?:[^=]+=(?:[^&]*))){1}((?:(&[^=-]+=*[^&]*){2}))/g)
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
    var parameter = new RegExp(/(\?(?!.*\?+)(?:[^=]+=(?:[^&]*))){1}((?:(&[^=-]+=*[^&]*){1,2}))$/)
    var result = new Array
     for(let i = 0; i < urls.length;i++){
         if(parameter.test(urls[i])){
             result.push(urls[i])
         }
     }
     return result
 
 }