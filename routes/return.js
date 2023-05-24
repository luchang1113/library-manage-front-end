const express = require('express');
const router = express.Router();
const db=require('../sql');

/* GET users listing. */
router.get('/', function(req, res, next) {
    //const cmd = `select * from unreturned_lend_query where ID = ` + req.query.userID + `;`
    db.query(`call return_book( ? , ? );`, [req.query.userID,req.query.bookID],function(err) {
        if(err){
            res.send("还书失败");
        }else{
            res.send("还书成功");
        }
    })
});

module.exports = router;
