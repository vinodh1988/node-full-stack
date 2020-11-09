const { SCHED_NONE } = require('cluster')
const fs = require('fs')
//const obj = require ('./second')
const {citizen,fun,number_array} = require('./second')
// Node is asynchronous and nonblocking and it is single threaded platform

// node js follows a module structuring for structuring code
// internally it uses a module called common js

fs.readFile('package.json','utf8',function(err,data) {
    if(err)
      console.log("Not read -error")
    else
      console.log(data);
})

console.log("function aftwards");
console.log(citizen)
console.log(number_array)
fun()