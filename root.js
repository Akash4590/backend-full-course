const http = require('http');
const userform = require('./userform');
const userdatasubmit = require('./userdatasubmit')

const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url == "/") {
        userform(req, res);
    }
    else if (req.url == "/submit") {
        userdatasubmit(req, res);
    }
    else {
        res.end("Hello Server");
    }

});

server.listen(3200);

console.log("Server is running on port 3200");