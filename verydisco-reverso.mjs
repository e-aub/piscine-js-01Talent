import { readFile } from "fs/promises";

async function veryDiscoReverso() {
    let args = process.argv
    if (args.length < 3) {
        return
    }
    let fileName = args[2];

    try{
        let sentence = await readFile(fileName,'utf8')
        sentence = sentence.split(/\s+/);
        let result = []
        for (let word of sentence) {
            let half = Math.ceil(word.length / 2);
            result.push(word.slice(half , word.length) + word.slice(0, half))
        }
        console.log(result.join(' '))
    }catch(err){
        console.log(err)
    }
}

veryDiscoReverso()