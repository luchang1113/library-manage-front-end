const express = require('express');
const router = express.Router();
const db=require('../sql');

/* GET users listing. */
router.get('/', function(req, res, next) {
    //const cmd = `select * from unreturned_lend_query where ID = ` + req.query.userID + `;`
    db.query(`select * from unreturned_lend_query where ID = ?`, [req.query.userID],function(err,data) {
        if(err){
            throw err;
        }else{
            console.log(data);

            res.send(data);
        }
    })
});

module.exports = router;
