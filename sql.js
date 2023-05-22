const mysql = require('mysql')
let db = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'690Lc690',
    database:'library_manage'
});

db.connect();

module.exports = db;