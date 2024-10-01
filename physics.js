const isNotUndefinedOrNull = (x) => x !== undefined && x !== null
const isNotZero = (x) => x != 0 && x != '0'
const getAcceleration = function(object) {
    var acceleration
    if (isNotUndefinedOrNull(object.f) && isNotUndefinedOrNull(object.m) && isNotZero(object.m)){
        return object.f/object.m
    }else if (isNotUndefinedOrNull(object.Δv) && isNotUndefinedOrNull(object.Δt) && isNotZero(object.Δt)){
        return object.Δv/ object.Δt
    }else if (isNotUndefinedOrNull(object.d) && isUndefinedOrNull(object.t) && isNotZero(object.t)){
        return (2 * d) / (t *t)
    }
    return "impossible"
}
