//beginning point of the web application
 const express = require("express");
 const app = express();
 const path = require("path")

 app.get("/",function(request,response){
     console.log(request.headers);
     console.log(request.body)
    // response.send("NODE IS UP AND RUNNING")
    response.sendFile(path.join(__dirname,"public/index.html"))
 })


 app.listen("9999",function(){
     console.log("server is started @", 9999)
     
 })