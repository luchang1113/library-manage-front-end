const express = require('express');
const router = express.Router();
const db = require("../sql");

/* GET users listing. */
router.get('/', function(req, res, next) {

    db.query('select * from book_info',function(err,data) {
        if(err){
            throw err;
        }else{
            console.log(data);
            res.render('users',{bookList:data,username:"noname"});
        }
    })
});

module.exports = router;
