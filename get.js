const get= function(src, path){
    path = path.split('.')
    console.log(path)
    for(let i = 0; i < path.length;i++){
        src = src[path[i]]
    }
    return src
}