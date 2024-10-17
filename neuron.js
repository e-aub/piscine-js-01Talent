function neuron(arr) {
    const questionRegex = /Questions:\s+(?<question>.+?)\s+-\s+Response:\s*(?<response>.+)/i;
    const orderRegex = /Orders:\s+(?<order>.+?)\s+-\s+Response:\s*(?<response>.+)/i;
    var result = { questions: {}, orders: {} };
    for (let str of arr) {
        let questionMatch = questionRegex.exec(str);
        let orderMatch = orderRegex.exec(str);
        if (questionMatch) {
            const snakeCaseQuestion = toSnakeCase(questionMatch.groups.question)
            result['questions'][snakeCaseQuestion]
                ? result['questions'][snakeCaseQuestion]['responses'].push(questionMatch.groups.response)
                : result['questions'][snakeCaseQuestion] = {
                    'question': questionMatch.groups.question, 'responses': [questionMatch.groups.response]
                }
        } else if (orderMatch) {
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


// console.log(neuron([
//     'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
//     'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
//     'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
//     'Orders: shutdown! - Response: Yes Sr!',
//     'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
// ])
// )