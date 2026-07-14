
// import express from 'express'
// import home from './pages/home.js';
// import about ,{contact} from './pages/about.js';
// const app = express();
// app.get("",(req,resp)=>{
//      resp.send(home())        
// });
// app.get("/about",(req,resp)=>{
//       resp.send(about())       
// });
// app.get("/contact",(req,resp)=>{
//       resp.send(contact())       
// });

// app.listen(4200);
// console.log("server is running on port 4200");


// import express from 'express';
// import Home from './pages/home.js';
// import login from './pages/login.js';
// import submit from './pages/submit.js';
// const app = express();
// app.get("/",(req,resp)=>{
//   resp.send(Home())
// });
// app.get('/login',(req,resp)=>{
//  resp.send(login()) ;    
// });
// app.post('/submit',(req,resp)=>{
//             resp.send(submit())  
// })
// app.listen(4200);
// console.log("server is running on port 4200")

// import express from 'express'
// import path from "path"
// const app = express();
// app.get('/',(req,resp)=>{
//      const Abspath = path.resolve('view/home.html');         
//      resp.sendFile(Abspath)      
// });
// app.get('/login',(req,resp)=>{
//      const Abspath = path.resolve('view/login.html');         
//      resp.sendFile(Abspath)      
// });
// app.get('/about',(req,resp)=>{
//      const Abspath = path.resolve('view/about.html');         
//      resp.sendFile(Abspath)      
// });
// app.get('/about',(req,resp)=>{
//      const Abspath = path.resolve('view/about.html');         
//      resp.sendFile(Abspath)      
// });
// app.use((req, res) => {
//     const absPath = path.resolve("view/404.html");

//     res.status(404).sendFile(absPath);
// });
// app.listen(4200);
// console.log("server is running on port 4200")


//==================MVC CODE===============
// import express from "express";
// import { handleuser } from "./controller/usercontroller.js";

// const app = express();

// app.set("view engine", "ejs");

// // app.get("/user", (req, res) => {
// //     res.render("user");
// // });
// app.get("/user",handleuser);

// app.listen(4200, () => {
//     console.log("Server running on http://localhost:4200");
// });

//===============dynamic route===========
import express from 'express'
const app =  express();
app.get('/',(req,resp)=>{
    const users= ['anil','sam','peter','sindhu']
    let data = ``;
    for(let i =0;i<users.length;i++){
        data+=`<li><a href="/user/${users[i]}">${users[i]}</a></li>`
        console.log(users[i])
    }
    // resp.send("this is home page")
    resp.send(data)
});
app.get("/user/:name", (req, resp)=>{
    console.log(req.params.name);
    const username =  req.params.name
  resp.send(`this is ${username} profile page`)
})
app.listen(4200, () => {
    console.log("Server running on http://localhost:4200");
});
