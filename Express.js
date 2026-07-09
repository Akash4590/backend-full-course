const express = require('express');
const app = express();
app.get("",(req,resp)=>{
      resp.write("<h1>Basic express js setup</h1>")        
});
app.get("/about",(req,resp)=>{
      resp.write("<h1>this is about page</h1>")        
});
app.get("/contact",(req,resp)=>{
      resp.write("<h1>this is contact page</h1>")        
});
app.listen(4200);
console.log("server is running on port 4200");