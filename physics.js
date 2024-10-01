const isDefined = (x) =>  x != null
const isNotZero = (x) => x != '0'
const getAcceleration = function(object) {
    if (isDefined(object.f) && isDefined(object.m) && isNotZero(object.m)){
        return object.f/object.m
    }else if (isDefined(object.Δv) && isDefined(object.Δt) && isNotZero(object.Δt)){
        return object.Δv/ object.Δt
    }else if (isDefined(object.d) && isDefined(object.t) && isNotZero(object.t)){
        return (2 * object.d) / (object.t *object.t)
    }
    return "impossible"
}
getAcceleration({ d: 10, t: 2, Δv: 100 })