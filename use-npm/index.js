console.log('Starting index.js');
const http = require('http');
const _ = require('lodash');

const server = http.createServer();

server.on('connection', (socket) => {
    console.log('New connection...');
})

server.listen('3000');

console.log('Listening on port 3000...');
