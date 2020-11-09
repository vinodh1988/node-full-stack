const fs = require('fs')
 
// Node is asynchronous and nonblocking and it is single threaded platform
fs.readFile('package.json','utf8',function(err,data) {
    if(err)
      console.log("Not read -error")
    else
      console.log(data);
})

console.log("function aftwards");