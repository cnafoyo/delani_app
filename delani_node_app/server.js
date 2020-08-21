let http =require('http');
const { Http2ServerRequest } = require('http2');

function onRequest(request, response){
    console.log("Request recieved")
    response.writeHead(200, {"content-type":"text/plain"});
    response.write("Hello World")
    response.end();
}
http.createServer(onRequest).listen(8000);
console.log("Server has started")
