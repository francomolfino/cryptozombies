const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;  

    const server = http.createServer((req, response) => {
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end(); 
      });
      
      server.listen(port, hostname, () => {
        console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
      });
});