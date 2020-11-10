//beginning point of the web application
 const express = require("express"); 
 const app = express();
 const path = require("path")
 const bodyParse = require("body-parser");
 const usersroute = require("./server/routes/users");

 app.use(bodyParse.urlencoded()); //parses incoming request

 app.use(express.static(path.join("public/styles"))); //configure static files path
 app.use(express.static(path.join("public/scripts")));
 app.use(express.static(path.join("node_modules/bootstrap/dist")));
 app.use(express.static(path.join("node_modules/jquery/dist")));

 app.set('views', path.join(__dirname, 'public/templates'));//setting the path of template files
 app.set('view engine', 'pug'); //configuring view Engine

 app.use("/users",usersroute);

 app.get("/",function(request,response){
     console.log(request.headers);
     console.log(request.body)
    // response.send("NODE IS UP AND RUNNING")
    response.sendFile(path.join(__dirname,"public/index.html"))
 })


 app.listen("9999",function(){
     console.log("server is started @", 9999)
     
 })