import http from 'http';
import { writeFileSync, mkdirSync } from 'fs';
import { atob } from 'abab'; // Ensure you import or polyfill atob if necessary

const authenticatedUsers = [
    'Caleb_Squires:abracadabra',
    'Tyrique_Dalton:abracadabra',
    'Rahima_Young:abracadabra'
];

// Create the guests directory if it doesn't exist
mkdirSync('guests', { recursive: true });

http.createServer((req, res) => {
    // Check for Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Basic ')) {
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Basic');
        res.end('Authentication required');
        return;
    }

    // Decode credentials
    const credentials = atob(authHeader.replace('Basic ', ''));
    if (!authenticatedUsers.includes(credentials)) {
        res.statusCode = 401;
        res.end('Unauthorized');
        return;
    }

    let receivedData = '';
    req.on('data', (dataChunk) => {
        receivedData += dataChunk.toString();
    });

    const fileName = `guests/${req.url.replace('/', '')}.json`;

    req.on('end', () => {
        try {
            const jsonData = JSON.parse(receivedData);
            const formattedData = JSON.stringify(jsonData, null, 2); // Pretty print JSON
            writeFileSync(fileName, formattedData);
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(formattedData);
        } catch (error) {
            console.error('Error parsing JSON or writing file:', error);
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Server failed' }));
        }
    });
}).listen(5000, 'localhost', () => {
    console.log('Starting server at port 5000');
});
