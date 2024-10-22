//port 5000
//print a simple message on the console as soon as it starts,
// status codes: 200, 404 and 500
//Responses will always be JSON

import http from 'http'
import { readFileSync } from 'fs';



function listenAndServe() {
    console.log('starting server at port :5000')
    http.createServer((req, res) => {
        let fileName = req.url
        try {
            const fileContent = readFileSync('./guests' + fileName + '.json', 'utf-8')
            res.writeHead(200, { "content-Type": 'application/json' })
            res.write(fileContent)
            res.end()
        } catch (err) {
            if ((err.code === 'ENOENT')) {
                res.writeHead(404, { "content-Type": 'application/json' })
                res.write(JSON.stringify({ error: 'guest not found' }))
                res.end()
            } else {
                res.writeHead(500, { "content-Type": 'application/json' })
                res.write(JSON.stringify({ error: 'server failed' }))
                res.end()
            }
        }
    }).listen(5000)
}

listenAndServe()