import { readFile, writeFile } from "fs/promises";
async function cypher() {
    let flag = ''
    let fileName = ''
    let newFilename = ''
    const args = process.argv.slice(2);
    if (args.length == 2 || args.length == 3) {
        if (args.length === 2) {
            fileName = args[0];
            newFilename = fileName
            flag = args[1]
        }
        if (args.length === 3) {
            newFilename = args[2]
        }
    }else{
        return
    }

    try{
        let fileContent = await readFile(fileName, 'utf8');
        if(flag === 'encode'){
            fileContent = btoa(fileContent)
            await writeFile(newFilename, fileContent)
        }else if(flag === 'decode'){
            fileContent = atob(fileContent)
            await writeFile(newFilename, fileContent)
        }
    }catch(err){
        console.log(err)
    }

}

cypher()