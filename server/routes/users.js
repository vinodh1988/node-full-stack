const express =require("express");
const home_dir  = require("../../config");
const route = express.Router();
const crud = require('../db/dbops');
const path= require("path")

//configuring route to take post request for users/add
route.post("/add",function(request,response){
    let user = request.body;
    console.log(request.body, " is  the data")
    crud.add(user,function(err){
        if(err)
          response.sendStatus(500);
        else
          {
          console.log(home_dir)
          response.redirect("/")
          }
    })

})

route.get("/report",function(request,response){
    crud.read(function(err,data){
       if(err)
          response.sendStatus(500);
       else{
          console.log(data)
          response.render("users",{users:data})
       }
        
    })
})

module.exports = route;