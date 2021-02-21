const fs = require('fs');
const express = require('express');
const http = require('http');
const https = require('https');
const { resolve } = require('path');

const HTTP_PORT = 8080;
const HTTPS_PORT = 8443;
const key = fs.readFileSync(__dirname + '/certs/selfsigned.key');
const cert = fs.readFileSync(__dirname + '/certs/selfsigned.crt');
const options = {
    key: key,
    cert: cert
};

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(resolve('./index.html'));
});

app.post('/log', (req, res) => {
    console.log(`[CLIENT LOG]: ${req.body.text || '[data lost]'}`);
});

app.get('*', (req, res) => {
    res.sendFile(resolve('./' + req.url));
});

const httpServer = http.createServer(app);
const httpsServer = https.createServer(options, app);

httpServer.listen(HTTP_PORT);
httpsServer.listen(HTTPS_PORT);

console.log(`Server started on ${HTTP_PORT} for HTTP and ${HTTPS_PORT} for HTTPS`);
