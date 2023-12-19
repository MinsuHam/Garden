const express = require('express');
const fs = require('fs-extra');
const router = express.Router();
const session = require('express-session');

const cookieParser = require('cookie-parser');
const FileStore = require('session-file-store')(session);


var authCheck = require('../routes/user/authCheck');

//mysql 연결
const mysqlDB = require('../config/db');
const connection = mysqlDB.init();
mysqlDB.open(connection); //연결 출력

router.use(cookieParser());

//세션 추가
router.use(session({
    secure: true, //https 환경에서만 session 정보 교환 가능
    secret: 'secret_key', //세션 암호화
    resave: false, //세션을 항상 저장할 지 
    saveUninitialized: true, //초기화 되지 않은채로 스토어에 저장
    cookie: { //세션 쿠키 설정 (세션 관리 시 클라이언트에게 보내는 쿠키)
        httpOnly: true, //자바스크립트를 통해 세션 쿠키를 사용할 수 없도록 함
        secure: true
    },
    name: 'session-cookie',
    store: new FileStore({
        checkPeriod: 86400000, //24 hours(24 * 60 * 60 * 1000ms)
    }), //데이터 저장 형식
    cookie: { maxAge: 86400000 },
    is_logined: true,
    userId: 1,
}));

//기본 주소 설정
router.get('/', (req, res) => {
    console.log("메인페이지 열기 성공!");
    console.log(req.session);

    if(req.session.is_logined == true) {
        res.render('index', {
            is_logined: req.session.is_logined,
            name: req.session.userId,
        });
    }else {
        res.render('index', {
            is_logined: false,
        });
    }
});

//로그인
router.get('/login', (req, res) => {
    console.log(req.session);
    console.log("로그인 페이지를 열었습니다.");
    res.render('./user/login');
});

router.post('/login', (req, res) => {
    const userid = req.body.userid;
    const userpass = req.body.userpass;
    
    if(userid && userpass) { // id와 pw가 입력되었는지 확인
        let sql = 'SELECT * FROM member WHERE userid = ? AND userpass = ?';

        connection.query(sql, [userid, userpass], (err, results, fields) => {
            if(err) throw err;
            if(results.length > 0) { // db에서의 반환값이 있으면 로그인 성공
                req.session.is_logined = true;
                req.session.nickname = userid;
                req.session.save(function() {
                    res.redirect('/');
                });
            } else {
                res.send('<script type="text/javascript">alert("로그인 정보가 일치하지 않습니다."); document.location.href="/login";</script>');
            }
        });
    } else {
        res.send('<script type="text/javascript">alert("아이디와 패스워드를 입력하세요"); document.location.href="/login";</script>');
    }
});

//회원가입
router.get('/create', (req, res) => {
    res.render('./user/create');
});
router.post('/create', (req, res) => {
    const userid = req.body.userid;
    const userpass = req.body.userpass;
    const userpass2 = req.body.userpass_check;
    const username = req.body.username;
    const emailname = req.body.emailname;
    const emailId = req.body.emailId;
    const tel = req.body.user_tel;
    const address = req.body.addr
    const postcode = req.body.new_zipcode;
    
    console.log(userid, userpass, username, emailname, tel, address, postcode);

    if(userid && userpass && emailname) {
        let sql = 'select * from member where userid = ? and userpass =? and emailname = ?';
        connection.query(sql, [userid, userpass, emailname], (err, results, fields) => {
            if(err) throw err;
            if(results.length >= 0 && userpass == userpass2) {
                let sql2 = 'insert into member (userid, userpass, username, emailname, tel, address, postcode) values(?,?,?,?,?,?,?)';
                connection.query(sql2, [userid, userpass, username, emailname, tel, address, postcode], (err, results, fields) => {
                    if(err) {
                        console.log(err);
                    }
                    else {
                        console.log(results);
                    }
                });
                res.send('<script type="text/javascript">alert("회원가입을 환영합니다."); document.location.href="/";</script>');
            }else if(userpass !== userpass2) {
                res.send('<script type="text/javascript">alert("입력한 비밀번호가 서로 다릅니다."); document.location.href="/create";</script>');
            }else {
                res.send('<script type="text/javascript">alert("이미 존재하는 아이디입니다."); document.location.href="/create";</script>');
            }
            res.end();
        });
    }
});


//장바구니
router.get('/cart', (req, res) => {
    if(!authCheck.isOwner(req, res)) { //로그인 안되어 있으면 로그인 페이지로
        res.redirect('/login');
        return false;
    }else {
        res.render('./user/cart'); //로그인 되어있으면 메인 페이지로 이동
        return false;
    }
});


//꽃선물 Page
router.get('/page_present', (req, res) => {
    console.log("꽃선물 Page 열기 성공!");
    console.log(req.session);

    res.render('./page/page_present');
});

//my Page
router.get('/mypage', (req, res) => {
    if(!authCheck.isOwner(req, res)) { //로그인 안되어 있으면 로그인 페이지로
        res.redirect('/login');
        return false;
    }else {
        res.render('./user/mypage'); //로그인 되어있으면 메인 페이지로 이동
        return false;
    }
});


//로그아웃
router.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
});




//상세페이지(상품)
router.get('/page_present_detail', (req, res) => {
    res.render('./page/page_present_detail');
});

module.exports = router; 