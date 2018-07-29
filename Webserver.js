//Loading Http module.
const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

//Using Method createServer in http module
//Structre//
var server = http.createServer();
server.listen();

// Plus Anonymous function & method & parameter (port,hostname, callbackFNC) ...

//Full code
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});