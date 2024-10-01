const arrToSet = (array) => new Set(array);

const arrToStr = (array) => array.join("");

const setToArr = (set) => new Array(...set);

const setToStr = (set) => [...set].join("");

const strToArr = (str) => str.split('');

const strToSet = (str) => new Set(str.split(''));

const mapToObj = (map) => Object.fromEntries(map.entries())

const objToArr = (obj) => Object.values(obj)

const objToMap = (obj) => new Map(Object.entries(obj))

const arrToObj = (arr) => Object.fromEntries(Object.entries(arr))

const strToObj = (str) => Object.fromEntries(Object.entries(str))

const superTypeOf = function(value){
    if (value === null){
        return 'null'
    }else if (typeof value === 'undefined'){
        return 'undefined'
    }else if (typeof value === 'string'){
        return 'string'
    }else if (typeof value === 'number'){
        return 'Number'
    }else if (value instanceof Map){
        return 'Map'
    }else if (value instanceof Set){
        return 'Set'
    }else if (value instanceof Array){
        return 'Array'
    }else if (value instanceof Function){
        return 'Function'
    }else if (typeof value === 'object'){
        return 'Object'
    }
}