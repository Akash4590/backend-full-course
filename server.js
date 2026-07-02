const http = require("http");

http.createServer((req, res) => {
  res.write('<h1>hi, This is Akash khan</h1>');
  res.end("Hello");
}).listen(4200);

console.log("Server is running on port 4200");