import { readFile, writeFile } from "fs/promises";
async function cypher() {
    let flag = ''
    let newFilename = ''
    var fileName
    const args = process.argv.slice(2);
    if (args.length >= 3) {
        fileName = args[0];
        flag = args[1]
        if (flag === 'encode') {
            newFilename = 'cypher.txt'
        } else if (flag === 'decode') {
            newFilename = 'clear.txt'
        }
        if (args.length === 3) {
            newFilename = args[2]
        }
    } else {
        return
    }

    try {
        let fileContent = await readFile(fileName, 'utf8');
        if (flag === 'encode') {
            fileContent = btoa(fileContent)
            await writeFile(newFilename, fileContent)
        } else if (flag === 'decode') {
            fileContent = atob(fileContent)
            await writeFile(newFilename, fileContent)
        }
    } catch (err) {
        console.log(err)
    }

}

cypher()