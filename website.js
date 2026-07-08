const http = require("http");
const fs = require("fs");

const server = http.createServer((req, resp) => {

    // Header sync read
    let file  = '/home'
    if(req.url!='/'){
        file=req.url;     
    }
    const headerData = fs.readFileSync("html/header.html", "utf-8");

    if (req.url!= "/style.css") {

        fs.readFile("html/"+file+".html", "utf-8", (err, homeData) => {

            if (err) {
                resp.writeHead(500, { "Content-Type": "text/plain" });
                return resp.end("Internal Server Error");
            }

            resp.writeHead(200, { "Content-Type": "text/html" });
            resp.end(headerData + homeData);

        });

    }

    else if (req.url === "/style.css") {

        fs.readFile("html/style.css", "utf-8", (err, cssData) => {

            if (err) {
                resp.writeHead(404, { "Content-Type": "text/plain" });
                return resp.end("CSS Not Found");
            }

            resp.writeHead(200, { "Content-Type": "text/css" });
            resp.end(cssData);

        });

    }

});

server.listen(4200, () => {
    console.log("Server is running on port 4200");
});