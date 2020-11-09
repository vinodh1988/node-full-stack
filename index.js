//beginning point of the web application
 const express = require("express");
 const app = express();


 app.listen("9999",function(){
     console.log("server is started @", 9999)
 })