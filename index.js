//beginning point of the web application
 const express = require("express");
 const app = express();

 app.get("/",function(request,response){
     console.log(request.headers);
     console.log(request.body)
     response.send("NODE IS UP AND RUNNING")
 })

 app.get
 app.listen("9999",function(){
     console.log("server is started @", 9999)
     
 })