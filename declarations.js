const escapeStr = `\`\\/"'`;
const arr = [4, '2'];
const obj = {str : 'ayoub',
    num : 2004,
    bool : true,
    undef : undefined,
}
const nested ={
    arr : [4, undefined, '2'],
    obj : {
        str : 'hackerman',
        num : 2004,
        bool : true
    }
}

deepFreeze(nested)
deepFreeze(arr)
deepFreeze(obj)

function deepFreeze(object){
    const propNames = Reflect.ownKeys(object)
    console.log(propNames)
    for (const name of propNames){
        const value = object[name]
        if (value && typeof value === "object"){
            deepFreeze(value)
        }
    }
    Object.freeze(object)
}
