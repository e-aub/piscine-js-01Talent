function neuron(arr) {
    if (!Array.isArray(arr)||arr.length === 0) {
        return {};
    }
    const questionRegex = /(?<key>.+?):\s+(?<question>.+?)\s+-\s+Response:\s*(?<response>.+)/i;
    var result = {};
    for (let str of arr) {
        let questionMatch = questionRegex.exec(str);
        if (questionMatch) {
            result[questionMatch.groups.key] ? '' :result[questionMatch.groups.key] = {}
            const snakeCaseQuestion = toSnakeCase(questionMatch.groups.question)
            result[questionMatch.groups.key][snakeCaseQuestion]
                ? result[questionMatch.groups.key][snakeCaseQuestion]['responses'].push(questionMatch.groups.response)
                : result[questionMatch.groups.key][snakeCaseQuestion] = {
                    'question': questionMatch.groups.question, 'responses': [questionMatch.groups.response]
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


// console.log(neuron(['Orders: shutdown please! - Response: no!']))