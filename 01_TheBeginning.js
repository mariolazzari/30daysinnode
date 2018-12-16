// the beginning
var http = require('http');

var host = 'localhost';
var port = 3000;

console.log('hello world');	

var server = http.createServer((req, res)=> {
    res.writeHead(200, {"Content-Type":"text/plain"});
    console.log("server is working");
    res.write("Hello world");
    //res.end("Success");
    res.end();
});

server.listen(port,host, (err) => {
    if(err) return console.log("Error: " + err);

    console.log("server is listening on " + host + ":" + port);
});                 
