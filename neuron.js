function neuron(arr) {
    if (!Array.isArray(arr)||arr.length === 0) {
        return {};
    }
    const questionRegex = /Questions:\s+(?<question>.+?)\s+-\s+Response:\s*(?<response>.+)/i;
    const orderRegex = /Orders:\s+(?<order>.+?)\s+-\s+Response:\s*(?<response>.+)/i;
    var result = {};
    for (let str of arr) {
        let questionMatch = questionRegex.exec(str);
        let orderMatch = orderRegex.exec(str);
        if (questionMatch) {
            result.questions ? '' :result.questions = {}
            const snakeCaseQuestion = toSnakeCase(questionMatch.groups.question)
            result['questions'][snakeCaseQuestion]
                ? result['questions'][snakeCaseQuestion]['responses'].push(questionMatch.groups.response)
                : result['questions'][snakeCaseQuestion] = {
                    'question': questionMatch.groups.question, 'responses': [questionMatch.groups.response]
                }
        } else if (orderMatch) {
            result.orders ? '' :result.orders = {}
            const snakeCaseOrder = toSnakeCase(orderMatch.groups.order);
            result['orders'][snakeCaseOrder]
                ? result['orders'][snakeCaseOrder]['responses'].push(orderMatch.groups.response)
                : result['orders'][snakeCaseOrder] = {
                    'order': orderMatch.groups.order,
                    'responses': [orderMatch.groups.response]
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


// console.log(neuron(neuron([]))
// )