const express = require('express');
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
                    res.render('users',{username:loginInfo.username,userID:result[0].peopleID});
        } else {
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf8;'})
            res.write('登陆失败');
            res.end();
        }
    })
})

module.exports = router;
