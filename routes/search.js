const express = require('express');
const router = express.Router();
const db=require('../sql');

/* GET users listing. */
router.get('/', function(req, res, next) {

    db.query(`select * from book_info where ${req.query.key} like '%${req.query.value}%'`,function(err,data) {
        if(err){
            throw err;
        }else{
            console.log(data);

            res.send(data);
        }
    })
});

module.exports = router;
