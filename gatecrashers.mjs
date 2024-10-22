import http from 'http'
import { writeFileSync } from 'fs'
import { Headers } from 'undici-types';

const authenticatedUsers = ['Caleb_Squires:abracadabra',
    'Tyrique_Dalton:abracadabra',
    'Rahima_Young:abracadabra'];

http.createServer((req, res) => {
    let credentials = req.headers.authorization ? req.headers.authorization : ''
    credentials = atob(credentials.replace('Basic ', ''))
    if (!authenticatedUsers.includes(credentials)) {
        res.statusCode = 401;
        res.end()
        return
    }
    let recivedData = ''
    req.on('data', dataChunk => {
        recivedData += dataChunk.toString()
    })
    let fileName = 'guests/' + req.url.replace('/', '') + '.json'
    console.log(fileName)
    req.on('end', () => {
        try {
            recivedData = JSON.stringify(JSON.parse(recivedData))
            writeFileSync(fileName, recivedData);
            res.setHeader('content-type', 'application/json')
            res.statusCode = 200
            res.end(recivedData)
        } catch (error) {
            res.setHeader('content-type', 'application/json')
            res.statusCode = 500
            res.end(JSON.stringify({ error: 'server failed' }))
        }
    })
}).listen(5000, 'localhost', () => console.log('starting server at port :5000'));

