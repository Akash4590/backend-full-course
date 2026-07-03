// const http = require('http');
// const server = http.createServer((req,res)=>{
//         res.writeHead(200,{"content-type":"text/html"}) 
//         console.log(req.url)   
//         if(req.url=='/'){
//           res.write(`
//                <form action="/submit" method="POST">
//                 <label>Name:</label>
//                 <input type="text" name="name" placeholder="Enter your name">
//                 <br><br>
//                 <label>Email:</label>
//                 <input type="email" name="email" placeholder="Enter your email">
//                 <br><br>
//                 <button type="submit">Submit</button>
//             </form>`);
//         }  
//         else if(req.url=="/submit"){
//               res.write("<h1>Data submitted</h1>")
//         }

// res.end()

// })
// server.listen(3200)
// console.log("server is running on port 3200")



const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
   fs.readFile('html/form.html','utf-8',(err,data)=>{
        
      if(err){
         res.writeHead(500,{"content-type":"text/plain"}) 
         res.end("internal server error");
         return;
      }
       if(req.url=='/'){
          res.writeHead(200,{"content-type":"text/html"}) 
           res.write(data);
         }  
         else if(req.url=="/submit"){
               res.write("<h1>Data submitted</h1>")
       }
           res.end()   
   })
        
})
server.listen(3200);
console.log("server is running on port 3200");