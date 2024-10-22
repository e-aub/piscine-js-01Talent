//port 5000
//print a simple message on the console as soon as it starts,
// status codes: 200, 404 and 500
//Responses will always be JSON

import http from 'http'
import { readFile } from 'fs/promises';



function listenAndServe() {
    console.log('starting server at port :5000')
    http.createServer(async (req, res) => {
        res.setHeader('content-type', 'application/json');
        const fileName = (req.url).replace('/', '')
        if (fileName.length == 0) {
            res.writeHead(404)
            const obj = { error: 'guest not found' }
            res.write(obj)
        } else {
            try {
                const fileContent = await readFile('./guests/' + fileName + '.json')
                try {
                    JSON.parse(fileContent);
                    res.writeHead(200)
                    res.write(fileContent)
                    res.end()
                } catch (err) {
                    res.writeHead(500)
                    const obj = { error: 'server failed' }
                    res.write(JSON.stringify(obj))
                    res.end()
                }
            } catch (err) {
                if ((err.message).includes('no such file or directory')) {
                    res.writeHead(404)
                    const obj = { error: 'guest not found' }
                    res.write(JSON.stringify(obj))
                    res.end()
                } else {
                    res.writeHead(500)
                    const obj = { error: 'server failed' }
                    res.write(JSON.stringify(obj))
                    res.end()
                }
            }
        }
    }).listen(5000)
}

listenAndServe()