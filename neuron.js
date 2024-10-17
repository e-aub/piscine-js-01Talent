function neuron(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return {};
    }
    const questionRegex = /(?<key>.+?):\s+(?<question>.+?)\s+-\s+Response:\s*(?<response>.+)/i;
    var result = {};
    for (let str of arr) {
        const questionMatch = questionRegex.exec(str);
        if (questionMatch) {
            const key = questionMatch.groups.key.toLowerCase()
            if (!result[key]) {
                result[key] = {};
            }
            const snakeCaseQuestion = toSnakeCase(questionMatch.groups.question)
            if (!result[key][snakeCaseQuestion]) {
                result[key][snakeCaseQuestion] = {
                    [key.toLowerCase().slice(0, key.length - 1)]: questionMatch.groups.question,
                    'responses': [questionMatch.groups.response]
                }
            } else {
                result[key][snakeCaseQuestion]['responses'].push(questionMatch.groups.response)
            }
        }
    }
    return result
}

function toSnakeCase(str) {
    return str
        .toLowerCase()
        .replace(/\s+/g, '_')
        .replace(/[^\w_]/g, '')
}