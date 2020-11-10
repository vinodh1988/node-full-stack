const sqlite3 = require('sqlite3')



function connect(){
    db = new sqlite3.Database("dbf.db", (err) => {
        if (err) {
          console.log('Could not connect to database', err)
          
        } else {
          console.log('Connected to database')
          createTable()
          console.log('synchronized')
        }
      });

      return db;
}

function createTable(){
    const sql = `
    CREATE TABLE IF NOT EXISTS products(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      type TEXT,
      price DOUBLE,
      description TEXT,
      qty TEXT,
      image TEXT)`
    return db.run(sql)
}

module.exports = connect;