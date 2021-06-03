//specifying host name and port
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
// using => to create a server instantiating object of type http, request and response object
const server = http.createServer((req, res) => 
{
  res.statusCode = 200;
  //setup header
  res.setHeader('Content-Type', 'text/plain');
  //response object = hello world
  res.end('Hello World');
});
// takes an optional port#, hostname and listener
//specify where you are listening too
server.listen(port, hostname, () => 
{
  //goes to console
  console.log(`Server running at http://${hostname}:${port}/`);
});