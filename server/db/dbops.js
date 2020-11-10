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

module.exports = crud;