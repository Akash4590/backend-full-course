const http = require('http');
const fs = require('fs');

const server =  http.createServer((req,res)=>{
fs.readFile("html/web.html",'utf-8',(err,data)=>{
if(err){
 res.writeHead(500,{"content-type":"text/plain"})
  res.writeHead(500,)     
  res.write("internal server error");
  res.end("");
  return  
}
else{
              res.writeHead(200,{"content-type":"text/html"})
              res.write(data);
              res.end("")
}
})
})
server.listen(3200);
console.log("server is running on port 3200")