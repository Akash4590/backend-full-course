const http = require('http');
const { json } = require('stream/consumers');
const userdata = [
              {
                name:'Akash',
                age:22,
                city:"multan",
                email:"aksh@gmail.com"

              },
              {
                name:'rafay',
                age:23,
                city:"multan",
                email:"rfay@gmail.com"

              },
              {
                name:'zohaib',
                age:24,
                city:"chaniot",
                email:"zohaib@gmail.com"

              },
              {
                name:'mohsin',
                age:25,
                city:"multan",
                email:"mohsin@gmail.com"

              },
              {
                name:'saqlain',
                age:27,
                city:"layyah",
                email:"saqlain@gmail.com"

              }
]
const server =  http.createServer((req,res)=>{
   res.setHeader("content-type","application/json")           
res.write(JSON.stringify(userdata))
res.end("")
})
server.listen(4800);
console.log("server is running on port 4800")