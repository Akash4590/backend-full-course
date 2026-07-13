// import express from "express";
// const app = express();
// function checkroute(req,resp,next){
//   console.log("user is accessing"+req.url+" page");
//   next()
// }
// app.use(checkroute)

// app.use((req,resp,next)=>{
//   console.log("user is accessing"+req.url+" page");
//   next();
// })


// app.get("/",(req,resp)=>{
//   resp.send("Home page")
// })
// app.get("/users",(req,resp)=>{
//   resp.send("user page")
// })
// app.get("/products",(req,resp)=>{
//   resp.send("products page")
// })
// app.listen(4200)

//=================agecheck================
// import express from "express";

// const app = express();

// function agecheck(req,resp,next){
//        if(!req.query.age || req.query.age <18){
//              resp.send("you can not access this page") 
//        }  else{
//               next()
//        }     

// }
// app.use(agecheck)


// app.get("/", (req, res) => {
//     res.send("<h1>Home Page</h1>");
// });

// app.get("/login", (req, res) => {
//     res.send("<h1>Login Page</h1>");
// });

// app.get("/admin", (req, res) => {
//     res.send("<h1>Admin Page</h1>");
// });

// app.listen(4200, () => {
//     console.log("Server running on http://localhost:4200");
// });

//==========routemiddleware===========
// import express from 'express'
// const app = express();

// function routemiddleware(req,resp,next){
//  if(!req.query.age||req.query.age <18){
//               resp.send("you are not allowed to vist this page")
//  } else{
//               next()
//  }
// }
// app.get("/",(req,resp)=>{
//         resp.send("<h1>Home page</h1>")      
// });
// app.get("/login",routemiddleware,(req,resp)=>{
//         resp.send("<h1>login page</h1>")      
// });
// app.get("/users",(req,resp)=>{
//         resp.send("<h1>user page</h1>")      
// });
// app.get("/products",(req,resp)=>{
//         resp.send("<h1>product page</h1>")      
// });

//  app.listen(4200, () => {
//     console.log("Server running on http://localhost:4200");
// });


//=============builtin middleware===========
// import express from "express";
// import path from 'path';
// const app = express();
// app.get("/",(req,resp)=>{
//               const filepath = path.resolve('view/home.html');
//               resp.sendFile(filepath)
// //        resp.send("home page")       
// });
// app.use(express.urlencoded({extended:false}))
// app.get("/login", (req, res) => {
//     res.send(`
              
//         <form action="/submit" method ="post">
//             <input type="text" name="username" placeholder="Enter Username"><br><br>

//             <input type="email" name="email" placeholder="Enter Email"><br><br>

//             <input type="password" name="password" placeholder="Enter Password"><br><br>

//             <button type="submit">Login</button>
//         </form>
//     `);
// });
// app.post("/submit",(req,resp)=>{
//         console.log("user login details are here",req.body)      
//        resp.send("submit page")       
// });
// app.get("/admin",(req,resp)=>{
//        resp.send("admin page")       
// });

//   app.listen(4200, () => {
//                console.log("Server running on http://localhost:4200");
//  });

//==========external middleware============

import express from 'express'
import morgan from 'morgan';
const app = express();
app.use(morgan('dev'))
app.get("/",(req,resp)=>{
        resp.send("Home page")      
});
app.get("/user",(req,resp)=>{
        resp.send("user page")      
});
app.get("/wait",(req,resp)=>{
     setTimeout(()=>{
   resp.send("result after 1 sec")
     },1000)       
})
    app.listen(4200, () => {
                 console.log("Server running on http://localhost:4200");
  });