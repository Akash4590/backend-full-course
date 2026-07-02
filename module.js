const fs = require('fs');
const os = require('os');
fs.writeFileSync("dummy.text","this one is for read file text for creating text")
// console.log(os.platform());
// console.log(os.hostname())
// console.log(os.cpus())
console.log(process.cwd());
console.log(process.pid);
