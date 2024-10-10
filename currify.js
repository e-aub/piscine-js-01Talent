const currify = function(func){
    return function saveArgs(){
       const args = [...arguments]
        if(args.length >= func.length){
            return func.apply(null, args)
        }else{
            return saveArgs.bind(null, ...args)
        }
    }
}