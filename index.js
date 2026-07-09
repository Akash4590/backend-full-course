
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


import express from 'express';
import Home from './pages/home.js';
import login from './pages/login.js';
import submit from './pages/submit.js';
const app = express();
app.get("/",(req,resp)=>{
  resp.send(Home())
});
app.get('/login',(req,resp)=>{
 resp.send(login()) ;    
});
app.post('/submit',(req,resp)=>{
            resp.send(submit())  
})
app.listen(4200);
console.log("server is running on port 4200")