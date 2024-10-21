import { readdir } from "fs/promises";


async function who() {
    const args = process.argv
    let path = '.'
    if(args.length === 3){
        path = args[2]
    }
    try{
        let files = await readdir(path, 'utf8');
        files = files.map(fileName=>{
            let temp = fileName.split('_')
            temp = [temp[1].replace(/.json/, ''), temp[0]]
            return temp
        })

        files = files.sort((a,b)=>{
            return a[0].localeCompare(b[0])
        })
        let count = 1

        for(let fileName of files){
            console.log(`${count}. ${fileName[0]} ${fileName[1]}`)
            count++
        }
    }catch(err){
        console.log(err)
    }
}

who()