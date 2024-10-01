const isNotUndefinedOrNull = (x) =>  x != null
const isNotZero = (x) => x != '0'
const getAcceleration = function(object) {
    if (isNotUndefinedOrNull(object.f) && isNotUndefinedOrNull(object.m) && isNotZero(object.m)){
        return object.f/object.m
    }else if (isNotUndefinedOrNull(object.Δv) && isNotUndefinedOrNull(object.Δt) && isNotZero(object.Δt)){
        return object.Δv/ object.Δt
    }else if (isNotUndefinedOrNull(object.d) && isNotUndefinedOrNull(object.t) && isNotZero(object.t)){
        return (2 * d) / (t *t)
    }
    return "impossible"
}
