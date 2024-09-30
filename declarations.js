const escapeStr = `\`\/"'`;
const arr = [4, '2'];
const obj = {str : 'ayoub',
    num : 2004,
    bool : true,
    undef : undefined,
    nested:{
        arr : [4, undefined, '2'],
        obj : {
            str : 'hackerman',
            num : 2004,
            bool : true
        }
    }
}

deepFreeze(object)

function deepFreeze(object){
    const propNames = Reflect.ownKeys(object)
    console.log(propNames)
    for (const name of propNames){
        const value = object[name]
        if (typeof value === "object"){
            deepFreeze(value)
        }
    }
    Object.freeze(object)
}
