const express =require("express");
const home_dir  = require("../../config");
const route = express.Router();
const {productcrud} = require('../db/dbops');


//configuring route to take post request for users/add
route.post("/add",function(request,response){
    let file= request.files.cimage;
    file.mv("D:/productimages/"+file.name);

   let product={
       name:request.body.name,
       description:request.body.description,
       qty:request.body.qty,
       image: file.name,
       price:request.body.price,
       type: request.body.type
   }
 

    productcrud.add(product,function(err){
        if(err)
          response.sendStatus(500);
        else
          {
          console.log(home_dir)
          response.sendStatus(200).json({status: "Successfuly added"})
          }
    })

})

route.get("/report",function(request,response){
    productcrud.read(function(err,data){
       if(err)
          response.sendStatus(500);
       else{
          console.log(data)
          response.json(data);
       }
        
    })
})

module.exports = route;