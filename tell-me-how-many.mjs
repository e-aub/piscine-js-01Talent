import { readdir } from "fs/promises";


async function howMany() {
    const args = process.argv
    let path = '.'
    if(args.length === 3){
        path = args[2]
    }
    try{
        let files = await readdir(path, 'utf8');
        console.log(files.length)
    }catch(err){
        console.log(err)
    }
}

howMany()