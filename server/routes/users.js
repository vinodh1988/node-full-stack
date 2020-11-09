const express =require("express")
const route = express.Router();
const crud = require('../db/dbops');

//configuring route to take post request for users/add
route.post("/add",function(request,response){
    let user = request.body;
    console.log(request.body, " is  the data")
    crud.add(user,function(err){
        if(err)
          response.sendStatus(500);
        else
          response.send("Added successfully")
    })

})

module.exports = route;