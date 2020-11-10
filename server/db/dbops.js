const connect = require('./connect');

const db = connect();

const crud = {
    read: function(callback){
      const sql = "select * from user"
      db.all(sql,[],callback);
    },

    add : function(user,callback){
        const sql = "insert into user(name,gender,city) values(?,?,?)";

        db.run(sql,[user.fname,user.gender,user.city],callback);
    }
}


const productcrud = {
    read: function(callback){
      const sql = "select * from products"
      db.all(sql,[],callback);
    },

    add : function(product,callback){
        const sql = "insert into products(name,type,qty,price,description,image) values(?,?,?,?,?,?)";

        db.run(sql,
        [product.name,product.type,product.qty,product.price,product.description,product.image],
        callback);
    }
}


module.exports = {crud: crud,productcrud: productcrud};