function pronoun(str) {
    const regex = /^(i|you|he|she|it|they|we)$/gi;
    str = str.split(/[\s+,.]+/);
    console.log(str)
    let result = {};

    for (let i = 0; i < str.length; i++) {
        let match = str[i].match(regex);
        if (match) {
            const pronoun = match[0].toLowerCase(); 
            result[pronoun] = result[pronoun] || { count: 0, word: [] };
            result[pronoun].count++;

            if (str[i + 1] && !str[i + 1].match(regex)) {
                result[pronoun].word.push(str[i + 1]);
            }
        }
    }
    return result;
}

// console.log(pronoun('I buy,\ni ,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go'))