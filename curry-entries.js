function defaultCurry(obj1) {
    let tmp = obj1;
    return function (obj2) {
        const keys = Object.keys(obj2);
        for (let key of keys) {
            tmp[key] = obj2[key]
        }
        return tmp
    }
}

function mapCurry(func) {
    return function (obj) {
        const entries = Object.entries(obj);
        return Object.fromEntries(entries.map(func));
    }
}

function reduceCurry(func) {
    return function (obj, acc = 0) {
        const entries = Object.entries(obj);
        return entries.reduce(func, acc)
    }
}


function filterCurry(func) {
    return function (obj) {
        const entries = Object.entries(obj);
        return Object.fromEntries(entries.filter(func))
    }
}

function reduceScore(personnel, acc = 0) {
    const filtered = filterCurry(
        entry => entry[1]['isForceUser'] === true)(personnel)
    return reduceCurry((acc, entry) => {
        return acc + entry[1]['shootingScore'] + entry[1]['pilotingScore']
    })(filtered, acc)
}


function filterForce(personnel){
    return filterCurry((entry => entry[1]['shootingScore']>= 80))(personnel)
}

function mapAverage(personnel){
    return mapCurry((entry)=>{
        const temp = entry[1]
        temp['averageScore'] = (temp['pilotingScore'] + temp['shootingScore'])/2
        return [entry[0], temp]})
        (personnel)
}

// const personnel = {
//     lukeSkywalker: { id: 5, pilotingScore: 98, shootingScore: 56, isForceUser: true },
//     sabineWren: { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//     zebOrellios: { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//     ezraBridger: { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true },
//     calebDume: { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true },
// }


// console.log(mapAverage(personnel))
// console.log(filterForce(personnel))
// console.log(reduceScore(personnel, 0))

// console.log(filterCurry(([k, v]) => typeof v === 'string' || k === 'arr')({
//     str: 'string',
//     nbr: 1,
//     arr: [1, 2],
//   }))

//   console.log(reduceCurry((acc, [k, v]) => (acc += v))({ a: 1, b: 2, c: 3 }, 0))

// console.log(mapCurry(([k, v]) => [`${k}_force`, v])(personnel))

console.log(defaultCurry({
    http: 403
  })({
    http: 200
  }))
