const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8081;

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'application/font-woff',
    '.woff2': 'application/font-woff2'
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    let filePath = '.' + req.url;
    
    // 处理 MathJax 字体路径重定向
    if (filePath.startsWith('./js/output/chtml/fonts/woff-v2/')) {
        filePath = './js/fonts/' + filePath.substring('./js/output/chtml/fonts/woff-v2/'.length);
    }
    
    if (filePath === './') {
        filePath = './week1/week1-content.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if(error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - File Not Found</h1>', 'utf-8');
            }
            else {
                res.writeHead(500);
                res.end('Server Error: ' + error.code);
            }
        }
        else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log('Available URLs:');
    console.log('  - http://localhost:8081/week1/content.html');
    console.log('  - http://localhost:8081/week2/content.html');
    console.log('  - ... and so on for other weeks');
});