import http from 'http'
import { writeFileSync } from 'fs'

const authenticatedUsers = ['Caleb_Squires:abracadabra',
    'Tyrique_Dalton:abracadabra',
    'Rahima_Young:abracadabra'];

http.createServer((req, res) => {
    try {
    let credentials = req.headers.authorization ? req.headers.authorization : ''
    credentials = atob(credentials.replace('Basic ', ''))
    if (!authenticatedUsers.includes(credentials)) {
        res.statusCode = 401;
        res.end('Unauthorized')
        return
    }
    let recivedData = req.headers.body

    let fileName = 'guests/' + req.url.replace('/', '') + '.json'
    console.log(fileName)
        recivedData = JSON.stringify(JSON.parse(recivedData))
        writeFileSync(fileName, recivedData);
        res.setHeader('content-type', 'application/json')
        res.statusCode = 200
        res.end(recivedData)
    } catch (error) {
        res.statusCode = 401
        res.end()
    }
}).listen(5000, 'localhost', () => console.log('starting server at port :5000'));

