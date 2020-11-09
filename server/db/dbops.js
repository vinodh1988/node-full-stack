const connect = require('./connect');

const db = connect();

const crud = {
    add : function(user,callback){
        const sql = "insert into user(name,gender,city) values(?,?,?)";

        db.run(sql,[user.fname,user.gender,user.city],callback);
    }
}

module.exports = crud;