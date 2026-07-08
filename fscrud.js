// const fs = require('fs');

// fs.writeFileSync("text/peter.txt", "My nmae is peter");
// fs.unlinkSync("text/peter.txt");
// fs.unlinkSync("text/banana.txt");
// const data  =  fs.readFileSync("text/apple.txt","utf-8");
// console.log(data);
// const update = fs.appendFileSync("text/apple.txt"," and this is good for health");
// console.log(update);

const fs = require('fs');
// console.log(process.argv[2]);
const operation  = (process.argv[2])

if (operation =='write'){
const name =  process.argv[3];
const content =  process.argv[4];
console.log(operation,name,content);
const fullname = "text/" + name + ".txt";
fs.writeFileSync(fullname,content)
} 

else if (operation =='read'){
const name =  process.argv[3];
// const content =  process.argv[4];
console.log(operation,name);
const fullname = "text/" + name + ".txt";
let data = fs.readFileSync(fullname,"utf-8");
console.log(data);
} 
else if (operation =='update'){
const name =  process.argv[3];
const content =  process.argv[4];
console.log(operation,name);
const fullname = "text/" + name + ".txt";
let data = fs.appendFileSync(fullname,content);
console.log(data);
} 
else if (operation=='delete'){
const name =  process.argv[3];
// const content =  process.argv[4];
console.log(operation,name);
const fullname = "text/" + name + ".txt";
let data = fs.unlinkSync(fullname);
console.log(data);
} 
else{
              console.log("operation not found");
}
