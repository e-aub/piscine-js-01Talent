function veryDisco() {
    let args = process.argv
    if (args.length < 3) {
        return
    }
    let sentence = args[2]

    sentence = sentence.split(/\s+/);
    let result = []
    for (let word of sentence) {
        let half = Math.ceil(word.length / 2);
        result.push(word.slice(half , word.length) + word.slice(0, half))
    }
    console.log(result.join(' '))
}

veryDisco()