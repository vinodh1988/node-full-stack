const express =require("express")
const route = express.Router();

//configuring route to take post request for users/add
route.post("/add",function(request,response){
    console.log(request.body, " is  the data")
    response.send("I am going to handle it")
})

module.exports = route;