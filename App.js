const fs =  require('fs');
fs.writeFileSync("read.text","this is my first write file in node")
// let a =200;
// if(a==200){
//               console.log("this is if condition");
// }
// else{
//               console.log("this is else condition");
// }

function fruit(item){
   console.log("this is " + item);           
}
fruit("Apple")

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
