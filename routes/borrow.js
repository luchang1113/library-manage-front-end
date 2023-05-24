const express = require('express');
const router = express.Router();
const db=require('../sql');

/* GET users listing. */
router.get('/', function(req, res, next) {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    month = (month > 9) ? month : ("0" + month);
    day = (day < 10) ? ("0" + day) : day;
    const today = year + "-" + month + "-" + day;
    const cmd = "INSERT INTO library_manage.lend (RenterID, BookID, RentTime, ExpectedReturnTime, Returned)\n" +
        'VALUES (' + req.query.name + ', '+ req.query.book +', \'' + today + '\', \'' + req.query.date + '\', 0);';
    console.log(cmd);
    db.query(cmd,function(err) {
        if (err) {
            res.send("借书失败")
        } else {
            res.send("借书成功")
        }
    })

});

module.exports = router;
