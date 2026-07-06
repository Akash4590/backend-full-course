// console.log("Apple1");
// let a = 20;
// let  b = 0;
// setTimeout(() => {
//     console.log("Apple2");
//     b = 100;
//     console.log(a+b);          
// }, 2000);
// console.log(a+b);
// console.log("Apple3");

const fs = require('fs');
// fs.readFile("text/khan.txt","utf-8",(err,data)=>{
//     if(err){
//          return false     
//     }          
//    console.log(data);           
// })
const data  =  fs.readFileSync("text/khan.txt","utf-8")
console.log(data);
console.log("end script")
