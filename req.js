const http =  require('http');

const server = http.createServer((req,res)=>{
              res.setHeader('content-type','text/html')
//          console.log(req.headers)     
        if (req.url == "/") {
        res.write("<h2>Home Page</h2>");
    }
    else if (req.url == "/login") {
        res.write("<h2>Login Page</h2>");
    }
    else if (req.url == "/register") {
        res.write("<h2>Register Page</h2>");
    }
    else {
        res.write("<h2>Other Page</h2>");
    }

      res.end("")

})
server.listen(6100)
console.log("server is running on port 6100")