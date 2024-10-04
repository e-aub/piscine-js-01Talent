const get= function(src, path){
    path = path.split('.')
    console.log(path)
    for(let i = 0; i < path.length;i++){
        if(src != undefined){
        src = src[path[i]]
        }else{
            break
        }
    }
    return src
}