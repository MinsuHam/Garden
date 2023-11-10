const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const nunjucks = require('nunjucks');

const app = express();

app.set('port', process.env.PORT || 8080);
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    autoescape: true, //false 일 경우 html 태그 허용, true 불가
    watch: true
});

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});