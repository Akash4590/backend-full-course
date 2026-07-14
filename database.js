// import express from 'express'
// import { MongoClient } from 'mongodb';
// const app = express();
// const dbname = "School"
// const url = "mongodb://localhost:27017"
// const client  = new MongoClient(url)

// async function dbconnection (){
//             await  client.connect()
//             const db = client.db(dbname);
//             const collection = db.collection('students')
//             const result = await collection.find().toArray();
//             console.log(result);
// }
// dbconnection();
// app.listen(4200);


import express from 'express'
import { MongoClient } from 'mongodb';
const app = express();
const dbname = "School"
const url = "mongodb://localhost:27017"
const client  = new MongoClient(url)

app.set("view engine",'ejs');
app.get("/",async(req,resp)=>{
   await  client.connect()
            const db = client.db(dbname);
            const collection = db.collection('students')
            const students = await collection.find().toArray();
            console.log(students);   
            resp.render('students',{students})        
})
app.listen(4200);

