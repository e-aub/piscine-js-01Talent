import http from 'http'
import { writeFileSync } from 'fs'

http.createServer((req, res) => {
    let recivedData = ''
    req.on('data', dataChunk => {
        recivedData += dataChunk.toString()
    })
    let fileName = 'guests/' + req.url.replace('/', '') + '.json'
    req.on('end', () => {
        try {
            writeFileSync(fileName, recivedData);
            res.setHeader('content-type', 'application/json')
            res.statusCode = 201
            res.end(recivedData)
        } catch (error) {
            console.log(error)
            res.setHeader('content-type', 'application/json')
            res.statusCode = 500
            res.end(JSON.stringify({ error: 'server failed' }))
        }
    })
}).listen(5000, 'localhost', () => console.log('starting server at port :5000'))