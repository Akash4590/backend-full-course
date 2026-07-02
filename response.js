const http = require('http');
const age = 22;
const server = http.createServer((req,resp)=>{
              resp.setHeader("content-type","text/html")
              resp.write(`
                            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node.js Test</title>
</head>
<body>

    <h1>Welcome to My Node.js Server</h1>

    <p>
        This is a simple HTML page served using Node.js. If you can see this
        page in your browser, your Node.js server is working correctly.
    </p>
    <h3>`+age+`</h3>
    <h3>`+new Date()+`</h3>

</body>
</html>`)
resp.end("")
})
server.listen(4800);
console.log("server is running on port 4200 ")