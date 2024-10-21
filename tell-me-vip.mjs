import { readdir, readFile, writeFile } from "fs/promises";


async function vip() {
    const args = process.argv
    let path = '.'
    if (args.length === 3) {
        path = args[2]
    }
    try {
        let files = await readdir(path, 'utf8');
        console.log(files.length)
        files = await Promise.all(files.map(async (fileName) => {
            let content = await readFile(`${path}/${fileName}`, 'utf8')
            let jsonData = JSON.parse(content);
            return jsonData.answer === 'yes' ? fileName : null
        }))
        files = files.filter(fileName => fileName !== null)

        files =files.map(fileName => {
            let temp = fileName.split('_')
            temp = [temp[1].replace(/.json/, ''), temp[0]]
            return temp
        })

        files = files.sort((a, b) => {
            return a[0].localeCompare(b[0])
        })
        let count = 1
        let result = ''
        for (let fileName of files) {
            result += `${count}. ${fileName[0]} ${fileName[1]}\n`
            count++
        }
        writeFile('vip.txt', result)
    } catch (err) {
        console.log(err)
    }
}

vip()