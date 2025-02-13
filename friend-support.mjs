//port 5000
//print a simple message on the console as soon as it starts,
// status codes: 200, 404 and 500
//Responses will always be JSON

import http from 'http'
import { readFileSync } from 'fs';


http.createServer((req, res) => {
    let fileName = req.url
    res.setHeader("content-Type", 'application/json');
    res.statusCode = 200;
    try {
        const fileContent = readFileSync('guests' + fileName + '.json', 'utf-8')
        // res.write(fileContent)
        res.end(fileContent)
    } catch (err) {
        if ((err.code === 'ENOENT')) {
            res.statusCode = 404;
            // res.writeHead("content-Type", 'application/json');
            // res.write(JSON.stringify({ error: 'guest not found' }))
            res.end(JSON.stringify({ error: 'guest not found' }))
        } else {
            res.statusCode = 500;
            // res.writeHead("content-Type", 'application/json');
            res.end(JSON.stringify({ error: 'server failed' }))
        }
    }
}).listen(5000, 'localhost', () => {
    console.log('starting server at port :5000')
})
