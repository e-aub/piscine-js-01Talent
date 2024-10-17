function pronoun(str) {
    const regex = /\b(i|you|he|she|it|they|we)\b/gi;
    str = str.split(' ');
    let result = {};

    for (let i = 0; i < str.length; i++) {
        let match = str[i].match(regex);
        if (match) {
            const pronoun = match[0]; 
            result[pronoun] = result[pronoun] || { count: 0, word: [] };
            result[pronoun].count++;

            if (str[i + 1] && !str[i + 1].match(regex)) {
                result[pronoun].word.push(str[i + 1]);
            }
        }
    }
    return result;
}
