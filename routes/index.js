const express = require('express');
const querystring = require("querystring");
const db = require('../sql')
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: '登录'});
});

router.post('/main', function (req, res, next) {

    let loginInfo = req.body;
    console.log(loginInfo);
    db.query("select * from user where username = ? and password = ?", [loginInfo.username, loginInfo.password], (err, result, field) => {
        if (err) throw err;
        if (result.length > 0) {
            db.query('select * from book_info',function(err,data) {
                if(err){
                    throw err;
                }else{
                    console.log(result[0]);
                    res.render('users',{bookList:data,username:loginInfo.username,userID:result[0].peopleID});
                }
            })
        } else {
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf8;'})
            res.write('登陆失败');
            res.end();
        }
    })
})

module.exports = router;
