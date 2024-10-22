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
        res.setHeader("content-Type", 'application/json');
        try {
            const fileContent = readFileSync('guests' + fileName + '.json', 'utf-8')
            res.statusCode = 200;
            res.write(fileContent)
            res.end()
        } catch (err) {
            if ((err.code === 'ENOENT')) {
                res.statusCode = 404;
                // res.writeHead("content-Type", 'application/json');
                res.write(JSON.stringify({ error: 'guest not found' }))
                res.end()
            } else {
                res.statusCode = 500;
                // res.writeHead("content-Type", 'application/json');
                res.write(JSON.stringify({ error: 'server failed' }))
                res.end()
            }
        }
    }).listen(5000)
}

listenAndServe()