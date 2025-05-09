const http = require('http');

// function reqListener(req, res) {
//     console.log(req);
//     return "Hello World!";
// }
//
// http.createServer(reqListener).listen(8080);

const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.writeHead(200, {'Content-Type': 'json'});
    res.write('Hello World!');
    res.end();
});

server.listen(8080, function () {
    console.log("Server listening on port 8080");
});